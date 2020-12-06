import React from 'react';
class NomeProdotto extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <h2>{this.props.nome}</h2>
        )
    }
}

export default NomeProdotto;