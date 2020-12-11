import React from 'react';

import { ButtonBackToList } from './UserButton';

class Login extends React.Component{
    constructor(props){
        super(props);
		this.auth = this.auth.bind( this );
    }
    auth(){
        this.props.onAuth();
    }
    render(){
        return(
            <section>
                <h1>Login</h1>
                <button onClick={this.auth}>Login</button>
				<br/><br/>
				<ButtonBackToList />
            </section>
        )
    }
}

export default Login;