import React from 'react';
class ElementoLista extends React.Component{
    render(){
        console.log( 'item '+this.props.key );
        return(
            
            <li key={this.props.key} >{this.props.valore}</li>
        )
    }
}
export default ElementoLista;