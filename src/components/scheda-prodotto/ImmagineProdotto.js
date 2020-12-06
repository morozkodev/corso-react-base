import React from 'react';

class ImmagineProdotto extends React.Component {

    render() {
        return (
            <div><img src={this.props.src} alt={this.props.alt}/></div>
        );
    }

}

export default ImmagineProdotto;