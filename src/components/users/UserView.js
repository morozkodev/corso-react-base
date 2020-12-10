import React from 'react';
import {Card, Button} from 'react-bootstrap';

class UserView extends React.Component{
    render(){
        const user = this.props.user;
        return(
            <section>
                <h1>Dettaglio utente</h1>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        <strong>Username: </strong>
						<span>{user.username}</span> <br/>
						<strong>Indirizzo: </strong>
                        <span>{user.address.street}</span>, 
                        <span>{user.address.suite}</span>, 
                        <span>{user.address.city}</span>, 
                        <span>{user.address.zipcode}</span>, 
                        <br />
                        <strong>Email: </strong><span>{user.email}</span><br />
                        <strong>Telefono: </strong><span>{user.phone}</span><br />
						<Button 
		                    variant="success" 
		                    onClick={ () => this.props.onViewList() }
		                    >Torna alla lista</Button>
                    </Card.Text>
                </Card>
            </section>
        )
    }
}
export default UserView;