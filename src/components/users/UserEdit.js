import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { ButtonBackToList } from './UserButton';
import { handleCommonValidateText, handleCommonValidateEmail } from '../common/ValidateUtil.js';

export default class UserEdit extends React.Component {

	constructor(props) {
		super(props);
		this.state = { userId: this.props.match.params.userId };
		this.handleEdit = this.handleEdit.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	componentDidMount() {
		console.log(`userId: ${this.state.userId}`);
		console.log(`pattern: ${JSON.stringify(this.props)}`);
		const options = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=UTF-8' 
			}
		}
		axios
			.get( `https://jsonplaceholder.typicode.com/users/${this.state.userId}`, options )
			.then(res => {
				console.log(res);
				const user = res.data;
				this.setState( { user } );
			});
	}

	handleEdit(e, validateFun) {
		e.persist();
		console.log(`Evento : ${e.target.name} -> ${e.target.value}`)
		validateFun(e.target.value);
		this.setState(prevState => ({
			user: { ...prevState.user, [e.target.name]: e.target.value }
		}));
	}

	handleSave(e) {
		e.preventDefault();
		console.log(`Salvataggio utente : ${JSON.stringify(this.state.user)}`)
		/* controllo validazioni input */
		/* salvataggio utente */
		axios
			.post(`https://jsonplaceholder.typicode.com/users`, this.state.user)
			.then(res => {
				console.log(`UserAdd -> ${res.status} / ${JSON.stringify(res.data)}`);
				this.props.history.push('/');
			});
	}

	render() {
		const user = this.state.user;
		let contenuto = <div>sto caricando</div>;
		if ( user ) {
			contenuto = <Form onSubmit={this.handleSave}>
					<Form.Group controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" name="name" onChange={(e) => this.handleEdit(e, handleCommonValidateText)} value={this.state.user.name} />
					</Form.Group>
					<Form.Group controlId="username">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" name="username" onChange={(e) => this.handleEdit(e, handleCommonValidateText)} value={this.state.user.username} />
					</Form.Group>
					<Form.Group controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control type="text" name="email" onChange={(e) => this.handleEdit(e, handleCommonValidateEmail)} value={this.state.user.email} />
					</Form.Group>
					<Button variant="primary" onClick={this.handleSave}>Salva</Button>
				</Form>
		}
		return (
			<section>
				<h1>Modifica utente</h1>
				{contenuto}
				<br />
				<ButtonBackToList />
			</section>
		)
	}

}