import React from 'react';

class BottoneLogout extends React.Component {
    render() {
        return (
                <div>
                     <button onClick={this.props.onLogoutClick}>Logout</button>
                </div>
        );
    }
}

export default BottoneLogout;