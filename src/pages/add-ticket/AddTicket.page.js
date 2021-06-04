import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp';
import { BreadcrumbFile } from '../../components/breadcrumb/BreadcrumbFile.comp';
// import { formValidation } from '../../utility/formValidation';


const ticketValues = {
    subject: '',
    issueDate: '',
    details: '',
};

// const ticketValuesError = {
//     subject: false,
//     issueDate: false,
//     details: false,
// };
export const AddTicket = () => {
    const [formData, setFormData] = useState(ticketValues);
    // const [formDataError, setFormDataError] = useState(ticketValuesError)
    useEffect(() => {}, [formData]);


    const handleOnChange = e => {
        const {name, value} = e.target;
        // console.log(name, value)
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    
    const handleOnSubmit = async (e) =>{
        e.preventDefault();
        // const isSubjectValid = await formValidation(formData.subject)
        
        // isSubjectValid && setFormDataError({
        //     ...formDataError,
        //     subject: !isSubjectValid
        // });

        console.log("form data received", formData)
    }
    
    // 
    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <BreadcrumbFile page="Add Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="mt-5">
                   <AddTicketForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} formData={formData}/>
                </Col>
            </Row>
            
        </Container>
    )
}
