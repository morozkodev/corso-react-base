import React from 'react';

class PrezzoProdotto extends React.Component {

    render() {
        return (
            <div><span>Prezzo: {this.props.price} EURO</span></div>
        );
    }

}

export default PrezzoProdotto;