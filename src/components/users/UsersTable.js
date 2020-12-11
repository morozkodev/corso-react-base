import React from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UsersTable extends React.Component {

	constructor(props) {
		super(props);
		this.state = { users: [] };
		console.log('constructor');
		this.initUsers = this.initUsers.bind(this);
	}

	componentDidMount() {
		console.log('component did mount');
		this.initUsers();
	}

	initUsers() {
		console.log("refresh users");
		fetch(`https://jsonplaceholder.typicode.com/users`)
			.then(response => {
				console.log(`init user -> step1 -> response}`);
				return response.json();
			})
			.then(res => {
				console.log(`init user -> step2 -> ${JSON.stringify(res)}`);
				const DatiJson = res.map(obj => obj);
				this.setState({
					users: DatiJson,
					loading: false,
				});
			})
			.catch(error => {
				console.log(error);
				this.setState({
					loading: false,
					error: error
				});
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

	renderError() {
		return <label className="alert alert-danger">Si è verificato un errore</label>
	}
	renderLoading() {
		return <div>Loading...</div>
	}
	renderDati() {
		if (this.state.error) {
			return this.renderError();
		} else {
			const righe = (this.state.users.map((user) =>
				<tr key={user.id.toString()}>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.username}</td>
					<td><Link to={`/view/${user.id}`}>Vedi</Link> </td>
					<td><Link to={`/edit/${user.id}`}>Edit</Link> </td>
				</tr>
			));
			return (
				<section>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Username</th>
								<th><Link to="/add">Add new</Link> </th>
								<th colSpan="2"><Button onClick={this.initUsers}>Refresh</Button> </th>
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

	render() {
		return (
            <section>
                <h1>Tabella utenti fetch</h1>
				<Link to={'/protected'}>Vai all'area riservata</Link>
                { this.state.loading ? this.renderLoading() : this.renderDati() }
            </section>
		)
	}

}

export default UsersTable;