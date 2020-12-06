import React from 'react';
import BarraRicerca from './BarraRicerca';
import TabellaUtenti from './TabellaUtenti';

class TabellaRicerca extends React.Component{
    render(){
        return(
            <div>
                <BarraRicerca/>
                <TabellaUtenti utenti={this.props.utenti}/>
            </div>
        )
    }
}
export default TabellaRicerca;