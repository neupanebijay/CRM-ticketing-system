import React from 'react'
import { Table } from 'react-bootstrap'

export const TicketTable = ({tickets}) => {
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
                {tickets.length ? tickets.map(row=>(
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.subject}</td>
                    <td>{row.status}</td>
                    <td>{row.addedAt}</td>
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
