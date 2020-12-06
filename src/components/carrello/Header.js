import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Header extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <h1>{this.props.titolo}</h1>
                </Col>
            </Row>
        )
    }
}

export default Header;