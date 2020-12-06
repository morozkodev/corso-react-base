import React from 'react';
import RigaCategoria from './RigaCategoria';
import RigaUtente from './RigaUtente';
class TabellaUtenti extends React.Component{
    render(){
        const testoRicerca = this.props.testoRicerca;
        const soloAttivi = this.props.soloAttivi;
        let righe = [];
        let ultimaCategoria = null;
        this.props.utenti.forEach( utente => {
            if(
                utente.cognome.toLowerCase().indexOf(testoRicerca.toLowerCase()) !== -1
                && ( !soloAttivi || utente.attivo ) ){
                if(utente.categoria !== ultimaCategoria){
                    righe.push(<RigaCategoria categoria={utente.categoria} key={utente.categoria} />);
                }
                righe.push(<RigaUtente singoloUtente={utente} key={utente.id}  />)
                ultimaCategoria = utente.categoria;
            }
        }
        );
        return(
            <div>
            <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Cognome</th>
                </tr>
            </thead>
            <tbody>
                {righe}
            </tbody>
        </table>
        </div>
        )
    }
}

export default TabellaUtenti;