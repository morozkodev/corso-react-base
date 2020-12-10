import React from 'react';
import {Button, Table} from 'react-bootstrap';

class UsersTable extends React.Component {
	
    viewUser(user) {
        console.log( `UsersTable.viewUser -> ${JSON.stringify(user)}` );
        this.props.onViewUser( user );
    }

    render(){
        const righe = (this.props.users.map((user)=>
            <tr key={user.id.toString()}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td><Button 
                    variant="success" 
                    onClick={ () => this.viewUser(user) }
                    >Dettaglio</Button> </td>
            </tr>
        ));
        return (
            <section>
                <h1>Lista utenti</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {righe}
                    </tbody>
                </Table>
            </section>
        )
    }

}

export default UsersTable;