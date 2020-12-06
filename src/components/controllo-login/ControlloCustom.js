import React from 'react';

import Benvenuto from './Benvenuto';
import BottoneGenerico from './BottoneGenerico';

class ControlloCustom extends React.Component {
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
            bottone = <BottoneGenerico onParentClick={this.logoutClick} label='Logout Custom'/>;
        } else {
            bottone = <BottoneGenerico onParentClick={this.loginClick} label='Login Custom'/>;
        }
        return (
                <div>
                     <Benvenuto utenteAutenticato={utenteAutenticato} />
                     {bottone}
                </div>
        );
    }
}

export default ControlloCustom;