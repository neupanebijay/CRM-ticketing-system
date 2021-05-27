// import { Button } from 'bootstrap'
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export const LoginForm = ({handleOnChange, email, password,handleOnSubmit, formSwitcher}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center"> Client Login </h1>
                    <hr />

                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            placeholder="abc@example.com"
                            onChange={handleOnChange}
                            // required
                            />
                        </Form.Group>  
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type="password"
                            name="password"
                            value={password}
                            placeholder="*****"
                            onChange={handleOnChange}
                            // required

                            />
                        </Form.Group>  
                        
                    <Button type="Submit">Login</Button>

                    </Form>
                    <hr/>
                    
                </Col>
            </Row>
            <Row>
                <Col>


                {/* when onCLick event is triggered then it should go to forget password page */}
                {/* By invoking incline function only causes error */}
                    {/* <a href="#!" onClick={formSwitcher('reset')}>Forget Password?</a> */}


{/* So do call back function */}


                    <a href="#!" onClick={() => formSwitcher('reset')}>Forget Password?</a>
                </Col>
            </Row>
        </Container> 
        
    )
}


LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,

}