import React from 'react';
import Prodotto from './Prodotto';
import Row from 'react-bootstrap/Row'


class Prodotti extends React.Component {
    render() {
        const lista = ( this.props.prodotti.map( (prodotto) => <Prodotto prodotto={prodotto}/> ) );
        return (
            <Row>
                {lista}
            </Row>
        )
    }
}

export default Prodotti;