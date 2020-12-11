import React from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

export const ButtonBackToList = withRouter(({history}) => (
    <Button variant="primary" type="button" onClick={() => history.push('/')}>Torna alla lista</Button>
) )