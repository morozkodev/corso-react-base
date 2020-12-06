import React from 'react';
class BarraRicerca extends React.Component{
    constructor(props){
        super(props);
        this.cambiaSoloAttivi = this.cambiaSoloAttivi.bind(this);
        this.cambiaTestoRicerca = this.cambiaTestoRicerca.bind(this);
    }
    cambiaSoloAttivi( e ){
        this.props.onChangeSoloAttivi(e.target.checked);
    }
    cambiaTestoRicerca( e ){
        this.props.onChangeTestoRicerca(e.target.value);
    }
    render(){
        const testoRicerca = this.props.testoRicerca;
        const soloAttivi = this.props.soloAttivi;
        return(
            <div>
            <form>
            <input 
                type="text" 
                placeholder="Cerca..." 
                value={testoRicerca}
                onChange={this.cambiaTestoRicerca} />
            <p>
                <input 
                    type="checkbox" 
                    checked={soloAttivi}
                    onChange={this.cambiaSoloAttivi} /><label>Mostra solo attivi</label>
            </p>
            </form>
            </div>
        )
    }
}

export default BarraRicerca;