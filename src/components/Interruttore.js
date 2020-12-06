import React from 'react';
import './Interruttore.css';

class Interruttore extends React.Component {

    constructor( props ) {
        super( props );
        this.state = { tipo: 'init', tempo: new Date(), acceso: true };
        this.testClick = this.testClick.bind( this );
        this.modificaCondizione = this.modificaCondizione.bind( this );
    }

    testClick( e ) {
        console.log( e );
        this.setState( { tipo: 'test ', tempo: new Date() } );
    }

    modificaCondizione( e ) {
       // this.setState( { acceso: !(this.state.acceso) } );
       this.setState(temp=>({
        acceso: !temp.acceso
          }));
    }

    render() {
        return (
            <div>
                <p>Tipo evento: <span>{this.state.tipo}</span> : {this.state.tempo.toLocaleTimeString()}</p>
                <button onClick={this.testClick}>Botton</button>
                <div>
                    <button onClick={this.modificaCondizione} className={this.state.acceso ? 'acceso' : 'spento'}>{this.state.acceso ? 'Acceso' : 'Spento'}</button>
                </div>
                <div  className={`animazione ${this.state.acceso ? 'visibile' : 'nascosto'}`}>
                    <h1>Contenuto interrutore</h1>
                </div>
            </div>

        );
    }

}

export default Interruttore;