import React from 'react';
import { Container } from 'react-bootstrap';
import Login from './components/users/Login';
import PrivateRoute from './components/users/PrivateRoute';
import ProtectedPage from './components/users/ProtectedPage';
import UsersTable from './components/users/UsersTable';
import UserView from './components/users/UserView';
import UserEdit from './components/users/UserEdit';
import UserAdd from './components/users/UserAdd';
import PaginaErrore from './components/common/PaginaErrore';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { auth: false };
		this.fakeAuth = this.fakeAuth.bind(this);
	}

	componentDidMount() {
		console.log('componenteDidMount');
	}

	fakeAuth() {
		this.setState({ auth: true });
	}

	render() {
		let login = <Login onAuth={this.fakeAuth}/>;
		if ( this.state.auth ) {
			login = <Redirect to='protected'/>
		}
		return (
			<Router>
				<Container>
					<h1>Pannello di controllo</h1>
					<Switch>
						<Route exact path="/login">
							{login}
						</Route>
						<PrivateRoute path="/protected" auth={this.state.auth}>
							<ProtectedPage />
						</PrivateRoute>
						<Route exact path="/errore/:httpCode" component={PaginaErrore} />
						<Route exact path="/add" component={UserAdd} />
						<Route extact path="/view/:userId" component={UserView} />
						<Route extact path="/edit/:userId" component={UserEdit} />
						<Route exact path="/" component={UsersTable} />
						<Route exact path="*">
							<PaginaErrore httpCode='404' />
						</Route>
					</Switch>
				</Container>
			</Router>
		);
	}
}
export default App;