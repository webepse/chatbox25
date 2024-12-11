import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import { useParams } from 'react-router-dom';
import database from './base'
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';

const App = () => {
  let {login} = useParams()

  const [pseudo, setPseudo] = useState(login)
  const [messages, setMessages] = useState({})

  useEffect(()=>{
    console.log('test')
    // query
    const dbMessagesRef = ref(database,'messages')
    // écouter les event de changement des données (sur Firebase)
    onValue(dbMessagesRef, (snapshot) => {
      const data = snapshot.val()
      if(data)
      {
        setMessages(data)
      }
    })
  },[])

  const addMessage = message => {
    const newMessages = {...messages}
    newMessages[`message-${Date.now()}`] = message
    // setMessages(newMessages)
    set(ref(database,'/'),{
      messages: newMessages
    })
  }

  const myMessages = Object.keys(messages).map(key => (
    <Message 
      key={key}
      pseudo={messages[key].pseudo}
      message={messages[key].message}
    />
  ))

  return ( 
    <div className="box">
      <div>
        <div className="messages">
          {myMessages}
        </div>
      </div>
      <Formulaire 
        pseudo={pseudo}
        addMessage={addMessage}
        length={150}
      />
    </div>
   );
}
 
export default App;