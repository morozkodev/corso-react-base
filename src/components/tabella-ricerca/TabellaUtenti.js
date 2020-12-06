import React from 'react';
import RigaCategoria from './RigaCategoria';
import RigaUtente from './RigaUtente';

class TabellaUtenti extends React.Component {
    render() {
        let righe = [];
            this.props.utenti.forEach( item => {
                righe.push(<RigaUtente singoloUtente={item} key={item.id}  />)
            }
        );
        return ( 
            <div>
            <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cognome</th>
                </tr>
            </thead>
            <tbody>
                <RigaCategoria/>
                {righe}
            </tbody>
        </table>
        </div>
        );
    }
}

export default TabellaUtenti;