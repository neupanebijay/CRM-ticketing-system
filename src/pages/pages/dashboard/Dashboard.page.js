import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import tickets from '../../../assets/data/dummy-tickets.json';
import { BreadcrumbFile } from '../../../components/breadcrumb/BreadcrumbFile.comp';
import { TicketTable } from '../../../components/tickets-table/TicketTable.comp';

export const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbFile page="Dashboard"/>
                </Col>
            </Row>

            <Row>
                <Col  className="text-center mt-5 mb-2">
                     <Button variant="success" style={{'fontSize': '1.5rem', 'padding': '10px 15px'}}>Add New Ticket </Button>
                </Col>
            </Row>
            <Row>
                <Col  className="text-center mt-2">
                    <div>
                        Total Clients: 500
                        
                    </div>
                    <div>

                        Pending Tickets: 20
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-3">
                    <h3>
                        Recently Added Clients
                    </h3>
                    
                </Col>
            </Row>
            <Row>
                <Col className="mt-3 recent-ticket">
                   <TicketTable tickets={tickets}/>
                </Col>
            </Row>
        </Container>
    )
}
