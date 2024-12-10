import React, { Component } from 'react';

class Formulaire extends Component {
    state = { 
        message : ''
     }

     createMessage = () => {
        const { pseudo, addMessage} = this.props
        const message = {
            pseudo: pseudo,
            message: this.state.message
         }
         addMessage(message)

         // reset après envoie du message à App
         this.setState({message:''})
     }

   
     handleChange = event => {
        const message = event.target.value
        this.setState({message:message})
     }
     
     handleSubmit = event => {
        event.preventDefault()
        // créer le message
        this.createMessage()
     }
    render() { 
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <textarea 
                    required
                    maxLength='140'
                    onChange={this.handleChange}
                    value={this.state.message}
                />
                <div className="info">140</div>
                <button type="submit">Envoyer</button>
            </form>

        );
    }
}
 
export default Formulaire;