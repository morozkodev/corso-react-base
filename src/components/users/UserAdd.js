import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { schemaUser } from '../common/UserSchema';
import {ButtonBackToList} from './UserButton';

class UserAdd extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h1>Aggiungi utente</h1>
				<Formik
					initialValues={{ name: '', username: '', email: '' }}
				 	validationSchema = {schemaUser}
                   	onSubmit = { (values, {setSubmitting}) => {
                        console.log('submit form');
								axios
									.post(`https://jsonplaceholder.typicode.com/users`, values )
									.then(res => {
										console.log( `UserAdd -> ${res.status} / ${JSON.stringify(res.data)}` );
										this.props.history.push( '/' );
									});
                        setSubmitting(false);
                        /**/
                    } }
				>
					{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="name">
								<Form.Label>Name</Form.Label>
								<Form.Control 
									type="text" 
									name="name" 
									value={values.name} 
									onChange={handleChange} 
									onBlur={handleBlur}/>
			                        { errors.name && touched.name ? (
			                            <div class="alert alert-danger">{ errors.name }</div>
			                        ) : null }
							</Form.Group>
							<Form.Group controlId="username">
								<Form.Label>Username</Form.Label>
								<Form.Control 
									type="text" 
									name="username" 
									value={values.username} 
									onChange={handleChange} 
									onBlur={handleBlur}/>
			                        { errors.username && touched.username ? (
			                            <div class="alert alert-danger">{ errors.username }</div>
			                        ) : null }
							</Form.Group>
							<Form.Group controlId="email">
								<Form.Label>Email</Form.Label>
								<Form.Control 
									type="text" 
									name="email" 
									value={values.email} 
									onChange={handleChange} 
									onBlur={handleBlur}/>
			                        { errors.email && touched.email ? (
			                            <div class="alert alert-danger">{ errors.email }</div>
			                        ) : null }
							</Form.Group>
							<Button type="submit" variant="primary" disabled={isSubmitting}>Submit</Button>
						</Form>
					)}
				</Formik>
				<br/>
				<ButtonBackToList/>			
			</React.Fragment>
		)
	}
}
export default UserAdd;