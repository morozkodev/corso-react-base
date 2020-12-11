import React from 'react';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component{
    render(){
        let contenuto;
        const children = this.props.children;
        console.log(this.props.auth);
        if(this.props.auth){
            contenuto = <div>
            <h2>PrivateRoute</h2>
            {children}
        </div> 
        } else {
            contenuto = <Redirect to="/login"></Redirect>
        }

        return(
            <section>
                {contenuto}
            </section>
        )
    }
}

export default PrivateRoute;