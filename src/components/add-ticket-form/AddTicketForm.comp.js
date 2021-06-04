import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Form, Jumbotron, Row } from 'react-bootstrap';
import './addNewTicket.style.css';

export const AddTicketForm = ({handleOnSubmit, handleOnChange, formData}) => {
    return (
        <Jumbotron className="mt-4 add-new-ticket">
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Subject</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                
                                name="subject"
                                value={formData.subject}
                                placeholder="Enter subject"
                                onChange={handleOnChange}
                                minLength = "5"
                                required
                                />
                            </Col>
                            {/* <Form.Text className="text-danger">{formDataError.subject && "Subject is required"}</Form.Text> */}
                        </Form.Group>  
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Issued Date</Form.Label>
                            <Col sm="10">

                                <Form.Control
                                type="date"
                                name="issueDate"
                                value={formData.issueDate}

                            
                                onChange={handleOnChange}
                                required

                                />
                            </Col>
                        </Form.Group>  

                        <Form.Group>
                            <Form.Label>Details</Form.Label>
                            <Form.Control 
                            as = "textarea"                        
                            name="details"
                            rows="5"
                            value={formData.details}
                            onChange={handleOnChange}

                            placeholder="Enter the details of your issue"
                            required
                            />

                        </Form.Group>
                        
                        <Button type="Submit" block variant="success">Submit</Button>

                    </Form>
                
            
    </Jumbotron>
    )
}


AddTicketForm.prototype = {
    handleOnSubmit: PropTypes.func.isRequired, 
    handleOnChange: PropTypes.func.isRequired, 
    formData: PropTypes.object.isRequired,
    // formDataError: PropTypes.object.isRequired,
}