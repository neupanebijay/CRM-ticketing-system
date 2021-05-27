// import { Button } from 'bootstrap'
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export const ResetPassword = ({handleOnChange, handleOnReserSubmit, formSwitcher, email}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center"> Reset Password </h1>
                    <hr />

                    <Form onSubmit={handleOnReserSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            placeholder="abc@example.com"
                            onChange={handleOnChange}
                            required
                            />
                        </Form.Group>  
                          
                        
                    <Button type="Submit">Reset Password</Button>

                    </Form>
                    <hr/>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={()=>formSwitcher("login")}>Login now</a>
                </Col>
            </Row>
        </Container> 
        
    )
}


ResetPassword.propTypes = {
    handleOnChange: PropTypes.func,
    email: PropTypes.string.isRequired,
    
}