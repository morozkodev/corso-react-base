import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Menu extends React.Component {
    render() {
        const lista = ( this.props.voci.map((voce) => <Nav.Link key={voce.id} href={voce.link}>{voce.nome}</Nav.Link>) )
        return (
            <Row>
                <Col>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {lista}
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        )
    }
}

export default Menu;