import React, { Component } from 'react';

class Connexion extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="connexionBox">
                <form className="connexion">
                    <input
                        type="text"
                        required
                    />
                </form>
                <button type="submit">GO</button>
            </div>
         );
    }
}
 
export default Connexion;