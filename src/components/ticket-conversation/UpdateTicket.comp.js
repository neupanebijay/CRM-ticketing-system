// import { Button } from 'bootstrap'
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form } from 'react-bootstrap';


export const UpdateTicket = ({message, handleOnChange, handleOnSubmit}) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Write here tp reply your message:</Form.Text>
            <Form.Control
            as="textarea"
            rows={5}
            name="reply"
            onChange={handleOnChange}
            value={message}
            />

            <div className="text-right">

                <Button variant="success" className="mt-3" type="submit">Reply</Button>

            </div>

        </Form>
    )
}

UpdateTicket.protoTypes ={
    message: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired
}