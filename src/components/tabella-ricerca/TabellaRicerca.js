import React from 'react';
import BarraRicerca from './BarraRicerca';
import TabellaUtenti from './TabellaUtenti';
class TabellaRicerca extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            testoRicerca: '',
            soloAttivi: false
        }
        this.modificaTestoRicerca = this.modificaTestoRicerca.bind(this);
        this.modificaSoloAttivi = this.modificaSoloAttivi.bind(this);
    }
    modificaTestoRicerca(testoRicerca){
        console.log(testoRicerca);
        this.setState({testoRicerca: testoRicerca});
    }
    modificaSoloAttivi( soloAttivi ) {
        console.log( soloAttivi );
        this.setState( {soloAttivi: soloAttivi} );
    }
    render(){
        return(
            <div>
                <BarraRicerca 
                    onChangeTestoRicerca={this.modificaTestoRicerca}
                    onChangeSoloAttivi={this.modificaSoloAttivi}
                    testoRicerca={this.state.testoRicerca} 
                    soloAttivi={this.state.soloAttivi} />
                <TabellaUtenti 
                    utenti={this.props.utenti} 
                    testoRicerca={this.state.testoRicerca} 
                    soloAttivi={this.state.soloAttivi}
                />

            </div>
        )
    }
}
export default TabellaRicerca;