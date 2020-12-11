import React from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UsersTable extends React.Component {

	constructor(props) {
		super(props);
		this.state = { users: [] };
		this.initUsers = this.initUsers.bind( this );
	}

	componentDidMount() {
		console.log('component did mount');
		this.initUsers();
	}

	initUsers() {
		console.log( "refresh users" );
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => {
				console.log(res);
				const users = res.data;
				this.setState({ users: users });
			});		
	}

	cancellaUtente(userId) {
		console.log(`cancellaUtente -> ${userId}`);
		const c = window.confirm('Sei sicuro?');
		if (c) {
			axios
				.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
				.then(res => {
					console.log(`UserDelete -> ${res.status} / ${JSON.stringify(res.data)}`);
				});
		}
	}

	render() {
		const righe = (this.props.users.map((user) =>
			<tr key={user.id.toString()}>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.username}</td>
				<td><Link to={`/view/${user.id}`}>Dettaglio</Link></td>
				<td><Link to={`/edit/${user.id}`}>Modifica</Link></td>
				<td><Button variant="danger" onClick={() => this.cancellaUtente(user.id)}>Cancella</Button></td>
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
							<th colSpan="2"><Link to={`/add`}>Aggiugi Utente</Link></th>
							<th><Button onClick={this.onRefresh}>Aggiorna</Button></th>
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