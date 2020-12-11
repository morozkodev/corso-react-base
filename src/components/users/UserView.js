import React from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import UserViewDetail from './UserViewDetail';
import {ButtonBackToList} from './UserButton';

class UserView extends React.Component {

    constructor(props){
        super(props);
        this.state = { userId: this.props.match.params.userId }
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

    render(){
        const user = this.state.user;
		let contenuto = <div>sto caricando</div>;
		if ( user ) {
			contenuto = <Card style={{ width: '18rem' }}>
				<Card.Title>{user.name}</Card.Title>
				<UserViewDetail user={user} />
			</Card>
		}
        return(
            <section>
                <h1>Dettaglio utente</h1>
                {contenuto}
				<br/>
				<ButtonBackToList/>
            </section>
        )
    }
}
export default UserView;