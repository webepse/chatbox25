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
      }
    ]
  */

  return ( 
    <div className="box">
      <div>
        <div className="messages">
          <Message />
          <Message />
          <Message />
        </div>
      </div>
      <Formulaire 
        pseudo={pseudo}
        addMessage={addMessage}
      />
    </div>
   );
}
 
export default App;