import React from 'react';

class RigaUtente extends React.Component {
    render() {
        return ( 
            <tr>
                <td>{this.props.singoloUtente.nome}</td>
                <td>{this.props.singoloUtente.cognome}</td>
            </tr>
        );
    }
}

export default RigaUtente;