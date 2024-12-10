import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Connexion extends Component {
    state = { 
        pseudo:"",
        gotToChat: false
     }

     handleChange = (event) => {
        const pseudo = event.target.value 
        this.setState({pseudo:pseudo})
     }

     handleSubmit = event => {
        event.preventDefault()
        this.setState({gotToChat:true})
     }

    render() { 
        if(this.state.gotToChat)
        {
            return <Navigate to={`/pseudo/${this.state.pseudo}`} />
        }
        return ( 
            <div className="connexionBox">
                <form className="connexion" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.pseudo}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit">GO</button>
                </form>
            </div>
         );
    }
}
 
export default Connexion;