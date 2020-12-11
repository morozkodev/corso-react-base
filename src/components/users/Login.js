import React from 'react';
import { ButtonBackToList } from './UserButton';

require('dotenv').config();

class Login extends React.Component{
    constructor(props){
        super(props);
		this.state = { codice: 'Codice da sostituire' }; 
		this.auth = this.auth.bind( this );
		this.test = this.test.bind( this );
    }
    auth(){
        this.props.onAuth();
    }
	
    test(){
        import('./Test')
            .then((Test)=>{
                console.log('ok');
				this.setState( { codice: Test.default.render() } );
            })
            .catch(err=>{
                console.log(err);
            });
    }

    render(){
		console.log('ENV START');
		console.log(process.env.REACT_APP_API_KEY);
		console.log('ENV END');
        return(
            <section>
                <h1>Login 1</h1>
                <button onClick={this.auth}>Login</button>
				<button onClick={this.test}>Test</button>
				<br/>
				{this.state.codice}
				<br/>
				<ButtonBackToList />
            </section>
        )
    }
}

export default Login;