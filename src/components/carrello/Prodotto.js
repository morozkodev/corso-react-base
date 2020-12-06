import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Prodotti extends React.Component {

    constructor( props ) {
        super( props );
        this.handleDettaglio = this.handleDettaglio.bind( this );
    }
 
    handleDettaglio( e ) {

    }

    render() {
        return (
            <Col nmd={3} key={this.props.prodotto.id}>
                <Card >
                <Card.Img variant="top" src={this.props.prodotto.img.src} />
                <Card.Body>
                    <Card.Title>{this.props.prodotto.nome}</Card.Title>
                    <Card.Text>
                        Prezzo: {this.props.prodotto.prezzo} euro 
                    </Card.Text>
                    <Button variant="primary" onClick={this.handleDettaglio}>Acquista</Button>
                </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default Prodotti;