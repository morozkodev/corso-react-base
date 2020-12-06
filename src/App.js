import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/carrello/Header.js';
import Menu  from './components/carrello/Menu.js';
import Prodotti  from './components/carrello/Prodotti.js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { carrello: []};
  }

  aggiornaCarrello( prodotto ) {
  
  }


  render() {
    const vocimenu = [
      {id: 1, nome: 'Home', link: '/'},
      {id: 2, nome: 'Prodotti', link: '/prodotti'},
      {id: 3, nome: 'Contatti', link: '/contatti'},
    ]
    const prodotti = [
      {id: 1, nome: 'Prodotto 1', prezzo: 11, img: { src: 'https://placeimg.com/320/240/tech', alt: 'prodotto1'}},
      {id: 2, nome: 'Prodotto 2', prezzo: 12, img: { src: 'https://placeimg.com/320/240/tech', alt: 'prodotto2'}},
      {id: 3, nome: 'Prodotto 3', prezzo: 13, img: { src: 'https://placeimg.com/320/240/tech', alt: 'prodotto3'}},
      {id: 4, nome: 'Prodotto 4', prezzo: 14, img: { src: 'https://placeimg.com/320/240/tech', alt: 'prodotto4'}},
    ]
    
    return (
      <Container>
          <Header titolo='Primo Sito React' />
          <Menu voci={vocimenu} />
          <Row>
            <Col md={8}>
              <Prodotti prodotti={prodotti} onChangeCarrello={this.aggiornaCarrello}/>
            </Col>
            <Col md={4}></Col>
          </Row>
      </Container>
    )
  }

}
 
export default App;