import React from 'react';
class BottoneGenerico extends React.Component {
    render() {
        return (
                <div>
                     <button onClick={this.props.onParentClick}>{this.props.label}</button>
                </div>
        );
    }
}
export default BottoneGenerico;