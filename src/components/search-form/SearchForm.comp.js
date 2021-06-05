import PropTypes from 'prop-types';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export const SearchForm= ({searchTicket, handleOnChange}) => {
    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm="5"></Form.Label>
                    <Col sm="7">
                        <Form.Control
                        name="searchBar"
                        value={searchTicket}
                        onChange= {handleOnChange}
                        placeholder="search"                        
                        />

                    </Col>                

            </Form.Group>
        </Form>
    )
}

SearchForm.propTypes = {
    searchTicket: PropTypes.string.isRequired, 
    handleOnChange: PropTypes.func.isRequired
}

