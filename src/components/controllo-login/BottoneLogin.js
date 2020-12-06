import React from 'react';

class BottoneLogin extends React.Component {
    render() {
        return (
                <div>
                     <button onClick={this.props.onLoginClick}>Login</button>
                </div>
        );
    }
}

export default BottoneLogin;