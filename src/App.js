import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import firestore from './base';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './animation.css';

const App = () => {
  const { login } = useParams();
  const [messages, setMessages] = useState([]);
  const [pseudo, setPseudo] = useState(login);
  const messageRef = useRef();
  const nodeRef = useRef();

  useEffect(() => {
    const dbMessagesRef = doc(firestore, 'messages', 'NuP0iEPUq2nb4MshdfRf');
    
    onSnapshot(dbMessagesRef, (snapshot) => {
      const data = snapshot.data();
      if (data) {
        // Modifier pour ne récupérer que les 10 derniers messages
        const lastTenMessages = data.messages.slice(-10);
        setMessages(lastTenMessages || []);
      }
    });
  }, [login]);

  const addMessage = (message) => {
    const newMessages = [...messages, { id: Date.now(), ...message }];
   
    // Limiter la taille du tableau à 10 messages
    const limitedMessages = newMessages.slice(-10);

    const messagesCollectionRef = doc(firestore, 'messages', 'NuP0iEPUq2nb4MshdfRf');

    setDoc(messagesCollectionRef, { messages: limitedMessages });
  };

  const isUser = (myPseudo) => myPseudo === pseudo;

  const myMessages = messages.map(
    (message) => (
      <CSSTransition
        timeout={200}
        classNames='fade'
        key={message.id}
        nodeRef={nodeRef}
      >
        <Message
          isUser={isUser}
          pseudo={message.pseudo}
          message={message.message}
        />
      </CSSTransition>
    )
  );

  return (
    <div className='box'>
      <div>
        <div className="messages" ref={messageRef}>
          <TransitionGroup className="message">
            {myMessages}
          </TransitionGroup>
        </div>
      </div>
      <Formulaire
        length={150}
        pseudo={pseudo}
        addMessage={addMessage}
      />
    </div>
  );
};

export default App;