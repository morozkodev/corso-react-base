import React from 'react';

import Benvenuto from './Benvenuto';
import BottoneLogin from './BottoneLogin';
import BottoneLogout from './BottoneLogout';

class ControlloLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {utenteAutenticato: false};
        this.loginClick = this.loginClick.bind( this );
        this.logoutClick = this.logoutClick.bind( this );
    }

    loginClick() {
        this.setState( {utenteAutenticato:true} );
    }


    logoutClick() {
        this.setState( {utenteAutenticato:false} );
    }

    render() {
        const utenteAutenticato = this.state.utenteAutenticato;
        let bottone;
        if ( utenteAutenticato ) {
            bottone = <BottoneLogout onLogoutClick={this.logoutClick}/>;
        } else {
            bottone = <BottoneLogin onLoginClick={this.loginClick}/>;
        }
        return (
                <div>
                     <Benvenuto utenteAutenticato={utenteAutenticato} />
                     {bottone}
                </div>
        );
    }
}

export default ControlloLogin;