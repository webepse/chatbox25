import React, { Component } from 'react';

class Formulaire extends Component {
    state = { 
        message : '',
        length: this.props.length
     }

     createMessage = () => {
        const { pseudo, addMessage, length} = this.props
        const message = {
            pseudo: pseudo,
            message: this.state.message
         }
         addMessage(message)

         // reset après envoie du message à App
         this.setState({message:'', length:length})
     }

   
     handleChange = event => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({message:message, length:length})
     }
     
     handleSubmit = event => {
        event.preventDefault()
        // créer le message
        this.createMessage()
     }

     handleKeyUp = event => {
        if(event.code === 'Enter')
        {
            this.createMessage()
        }
     }

    render() { 
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <textarea 
                    required
                    maxLength={this.props.length}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    value={this.state.message}
                />
                <div className="info">{this.state.length}</div>
                <button type="submit">Envoyer</button>
            </form>

        );
    }
}
 
export default Formulaire;