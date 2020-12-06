import React from 'react';
class NomeProdotto extends React.Component {
    
    render(){
        return(
        <h2>{this.props.nome}</h2>
        )
    }
}

export default NomeProdotto;