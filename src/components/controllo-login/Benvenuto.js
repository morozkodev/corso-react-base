import React from 'react';

class Benvenuto extends React.Component {

    render() {
        let codice;
        const utenteAutenticato = this.props.utenteAutenticato;
        if ( utenteAutenticato ) {
            codice = <h3>Bentornato</h3>
        } else {
            codice = <h3>Login</h3>
        }
        return (
            <div>
                Bevenuto {codice}
            </div>
        )
    };

}

export default Benvenuto;