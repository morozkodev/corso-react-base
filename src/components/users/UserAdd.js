import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

class UserAdd extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h1>Aggiungi utente</h1>
				<Formik
					initialValues={{ name: '', username: '', email: '' }}
					validate={
						(values) => {
							let errors = {};
							if (!values.name) {
								errors.name = 'Required'
							}
							if (!values.username) {
								errors.username = 'Required'
							}
							if (!values.email) {
								errors.email = 'Required'
                            } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ){
                                errors.email = 'Email NON valida'
                            }													
							return errors;
						}
					}
                   onSubmit = { (values, {setSubmitting}) => {
                        console.log('submit form');
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
				<Button onClick={() => this.props.onViewList()}
					variant="success">Torna alla lista</Button>				
			</React.Fragment>
		)
	}
}
export default UserAdd;