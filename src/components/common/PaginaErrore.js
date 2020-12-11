import React from 'react';
import { Link } from 'react-router-dom';

class PaginaErrore extends React.Component {
	constructor( props ) {
		super( props );
		console.log( `PaginaErrore props -> ${JSON.stringify(this.props)}` )
		if ( this.props.httpCode ) {
			this.state = { httpCode: this.props.httpCode };	
		} else {
			this.state = { httpCode: this.props.match.params.httpCode };
		}
		
	}
	render() {
		let messageError = 'Ci dispiace, non siamo riusciti a gestire la tua richiesta';
		console.log( `PaginaErrore httpCode -> ${JSON.stringify(this.state)}` );
		if ( this.state.httpCode === '404' ) {
			messageError = 'Ci dispiace, Risorsa non troava';
		}
		return (
			<div className="alert alert-danger">
				<p>{messageError}</p>
				<Link to='/'>Torna alla HomePage</Link>
			</div>
		)
	}
}

export default PaginaErrore;