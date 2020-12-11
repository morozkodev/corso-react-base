import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UsersTable extends React.Component {
	
	constructor( props ) {
		super( props );
		this.state = { users: [] };
	}
	
    componentDidMount(){
        console.log('component did mount');
        this.setState({ users: this.props.users });
    }	
	
    render(){
        const righe = (this.props.users.map((user)=>
            <tr key={user.id.toString()}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td><Link to={`/view/${user.id}`}>Dettaglio</Link></td>
				<td><Link to={`/edit/${user.id}`}>Modifica</Link></td>
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
							<th><Link to={`/add`}>Aggiugi Utente</Link></th>
							<th><Button onClick={this.props.onRefresh}>Aggiorna</Button></th>
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