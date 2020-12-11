import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import UsersTable from './components/users/UsersTable';
import UserView from './components/users/UserView';
import UserEdit from './components/users/UserEdit';
import UserAdd from './components/users/UserAdd';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
		this.initUsers = this.initUsers.bind( this );
	}

	componentDidMount() {
		console.log('componenteDidMount');
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

	render() {
		return (
			<Router>
				<Container>
					<h1>Pannello di controllo</h1>
	                <Switch>
						<Route exact path="/add" component={UserAdd} />
						<Route extact path="/view/:userId" component={UserView}/>
						<Route extact path="/edit/:userId" component={UserEdit}/>
	                    <Route extact path="/">
	                        <UsersTable users={this.state.users} onRefresh={this.initUsers}/>
	                    </Route>						
	                </Switch>
				</Container>
			</Router>
		);
	}
}
export default App;