import React, { useState } from 'react';
import './App.css'
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import { useParams } from 'react-router-dom';

const App = () => {
  let {login} = useParams()

  const [pseudo, setPseudo] = useState(login)
  const [messages, setMessages] = useState({})

  const addMessage = message => {
    const newMessages = {...messages}
    newMessages[`message-${Date.now()}`] = message
    setMessages(newMessages)
  }

  /*
    messages = [
      'message-123456489' => {
          pseudo: "Jordan",
          message: 'test'
        },
      'message-1561956156' => {
          pseudo: "Carole",
          message: "Hello"  
      },
      'message-15915991' => {
          pseudo: "Nimai",
          message: "hello"
        }
    ]
  */
  /* crée un tableau avec les clé d'un autre tableau ['message-123456489','message-1561956156','message-15915991'] */
  // map recrée un tableau sur base d'un tableau qui bouclé
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