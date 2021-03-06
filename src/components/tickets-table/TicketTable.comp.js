import PropTypes from 'prop-types';
import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const TicketTable = ({tickets}) => {
    // if(!tickets.length) 
    
            return (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Client Id</th>
                        <th>Subject</th>
                        <th>Ticket Status</th>
                        <th>Opened Date</th>
                        </tr>
                    </thead>

                    
                    <tbody>
                        {tickets.length ? tickets.map(ticket=>(
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>
                                <Link to={`/ticket-message/${ticket.id}`}>
                                {ticket.subject}
                                </Link>
                            </td>
                            <td>{ticket.status}</td>
                            <td>{ticket.addedAt}</td>
                        </tr>
                        )) :

                        <tr>
                            <td colSpan="4" className="text-center">No tickets available in the table</td>
                        </tr>

                        }
                        
                        
                        
                    </tbody>
                </Table>
            )
    
}
TicketTable.propTypes = {
    tickets: PropTypes.array.isRequired,
    // handleOnChange: PropTypes.func.isRequired
}
