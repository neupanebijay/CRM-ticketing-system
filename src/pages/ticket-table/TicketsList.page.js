import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import tickets from '../../assets/data/dummy-tickets.json'
import { BreadcrumbFile } from '../../components/breadcrumb/BreadcrumbFile.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/tickets-table/TicketTable.comp'


export const TicketsList = () => {
    const [searchTicket, setSearchTicket] = useState('')
    const [displayTicket, setDisplayTicket] = useState(tickets)

    useEffect(() => {
        
    }, [searchTicket, displayTicket])

    
    const ticketSearch = (text) => {
        const showTicket = tickets.filter(ticket=>ticket.subject.toLowerCase().includes(text.toLowerCase()));
        setDisplayTicket(showTicket)

    }
    
    const handleOnChange = e =>{
        const {value} = e.target
        setSearchTicket(value)
        ticketSearch(value)
    }
    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <BreadcrumbFile page="TicketList"/>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Link to="/add-ticket">
                        <Button variant="success">Add Ticket</Button>
                    </Link>
                </Col>
                <Col>
                    <SearchForm  searchTicket ={searchTicket} handleOnChange={handleOnChange} />
                </Col>
            </Row>
            <hr />

            {/* <Row>
                <Col className="mt-5">
                    <h1 className="text-center">Ticket Table</h1>
                </Col>
            </Row> */}
            <Row>
                <Col className="mt-5">
                    <TicketTable tickets={displayTicket}/>
                </Col>
            </Row>
        </Container>
    )
}
