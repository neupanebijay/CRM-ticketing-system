
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import tickets from '../../assets/data/dummy-tickets.json';
import { BreadcrumbFile } from '../../components/breadcrumb/BreadcrumbFile.comp';
import { TicketConversation } from '../../components/ticket-conversation/TicketConversation..comp';
import { UpdateTicket } from '../../components/ticket-conversation/UpdateTicket.comp';

const singleTicket = tickets[0]
export const TicketMessage = () => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        
    }, [message])

    // handleOn change
    const handleOnChange =(e)=>{
        setMessage(e.target.value)
    }
// console.log(message)

    const handleOnSubmit =()=>{
        alert('form is submitted');
        
    }
    return (
        <Container>
             <Row>
                <Col className="mt-5">
                    <BreadcrumbFile page="Ticket Conversation"/>
                </Col>
            </Row>
             <Row>
                <Col className="text-weight-bolder text-secondary">
                    <div className="subject">Subject:         {singleTicket.subject}</div>
                    <div className="ticket-open">Ticket Open:{singleTicket.addedAt}</div>
                    <div className="status">Status: {singleTicket.status}</div> 
                </Col>
                <Col className="text-right">
                    <Button variant="danger">Close Ticket</Button>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="mt-5">
                    <TicketConversation msgs={singleTicket.history}/>
                </Col>
            </Row>

            <Row>
                <Col className="mt-5">
                <UpdateTicket message={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>
        </Container>
    )
}
