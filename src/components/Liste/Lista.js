import React from 'react';
import ElementoLista from './ElementoLista';

class Lista extends React.Component {

    render() {
        const numeri = [ 1,2,3,4,5 ];
        const lista = (numeri.map((numero) => <ElementoLista key={numero.toString()} valore={numero} /> ));
        return(
            <div>
                <ul>{lista}</ul>
            </div>
        )
    }

}

export default Lista;