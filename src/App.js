import React from 'react';
import { Container } from 'react-bootstrap';
import UsersTable from './components/users/UsersTable';
import UserView from './components/users/UserView';
import UserEdit from './components/users/UserEdit';
import UserAdd from './components/users/UserAdd';
import PaginaErrore from './components/common/PaginaErrore';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

class App extends React.Component {

	componentDidMount() {
		console.log('componenteDidMount');
		this.initUsers();
	}

	render() {
		return (
			<Router>
				<Container>
					<h1>Pannello di controllo</h1>
	                <Switch>
	                    <Route exact path="/errore/:httpCode"  component={PaginaErrore}/>
						<Route exact path="/add" component={UserAdd} />
						<Route extact path="/view/:userId" component={UserView}/>
						<Route extact path="/edit/:userId" component={UserEdit}/>
	                    <Route exact path="/" component={UsersTable}/>
						<Route exact path="*">
							<PaginaErrore httpCode='404'/>
						</Route>					
	                </Switch>
				</Container>
			</Router>
		);
	}
}
export default App;