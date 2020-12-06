import React from 'react';
class RigaUtente extends React.Component{
    render(){
        const attivo = this.props.singoloUtente.attivo;
        const cognome = attivo === 1 ? (
            this.props.singoloUtente.cognome
        ) : (
        <span style={{ color: 'red' }}>{this.props.singoloUtente.cognome}</span>
        );
        return(
            <tr>
                <td>{this.props.singoloUtente.id}</td>
                <td>{this.props.singoloUtente.nome}</td>
                <td>{cognome}</td>
            </tr>
        )
    }
}
export default RigaUtente;