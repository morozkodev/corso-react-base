import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import UsersTable from './components/users/UsersTable';
import UserView from './components/users/UserView';

const displayList = 'list';
const displayView = 'view';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
		users: [], 
		currentUser: {},
		display: displayList
	}
	this.viewUser = this.viewUser.bind( this );
	this.viewList = this.viewList.bind( this );
  }

  componentDidMount() {
    console.log( 'componenteDidMount' );
      axios
        .get( 'https://jsonplaceholder.typicode.com/users' )
        .then( res => {
          console.log( res ) ;
          const users = res.data;
          this.setState( { users: users } );
        } );

  }

  viewUser( user ) {
	console.log( `App.viewUser -> ${JSON.stringify(user)}` );
	this.setState({ currentUser: user, display: displayView });
  }

  viewList() {
	console.log( `App.viewList` );
	this.setState({ currentUser: {}, display: displayList });
  }

  render(){
	let contenuto;
	if ( this.state.display === displayList ) {
		contenuto = <UsersTable users={this.state.users} onViewUser={this.viewUser}/>;
	} else if ( this.state.display === displayView ) {
		contenuto = <UserView user={this.state.currentUser} onViewList={this.viewList}/>;
	} else {
		contenuto = '<p>Non supportato</p>'
	}
    return (
        <Container>
            <h1>Pannello di controllo</h1>
            {contenuto}
        </Container>
    );
  }
}
export default App;