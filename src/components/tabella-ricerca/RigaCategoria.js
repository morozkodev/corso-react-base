import React from 'react';
class RigaCategoria extends React.Component{
    render(){
        return(
            <tr>
                <td colSpan="2"><strong>{this.props.categoria}</strong></td>
            </tr>
        )
    }
}
export default RigaCategoria;