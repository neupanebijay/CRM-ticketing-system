import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/img/logo.png';

export const Header = () => {
    return (
        // when the size becomes medium then menu items stack on each other using expand
        // <Navbar collapseOnSelect bg="secondary" variant="dark" expand="md">

            
        //     <Navbar.Brand href="#Home">
        //         <img src={Logo} alt="main logo" width="50px" height="50px"/>
        //     </Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="ml-auto">
        //             <Nav.Item>
        //                 <Nav.Link href="/dashboard">
        //                     Dashboard
        //                 </Nav.Link>
        //             </Nav.Item>
        //             <Nav.Item>
        //                 <Nav.Link href="/tickets">
        //                     Tickets
        //                 </Nav.Link>
        //             </Nav.Item>
        //             <Nav.Item>
        //                 <Nav.Link href="/logout">
        //                     Logout
        //                 </Nav.Link>
        //             </Nav.Item>
        //         </Nav>

        //     </Navbar.Collapse>
        // </Navbar>
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="#">
                <img src={Logo} alt="main logo" height="50" width="50"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/tickets">Tickets</Nav.Link>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
    )
}
