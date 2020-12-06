import React from 'react';

class Lista extends React.Component {

    render() {
        const numeri = [ 1,2,3,4,5 ];
        const lista = (numeri.map(
            (numero) =>  {
                const id = numero.toString();
                return ( <li key={id}>{numero}</li> );
            }     
        ));
        return(
            <div>
                <ul>{lista}</ul>
            </div>
        )
    }

}

export default Lista;