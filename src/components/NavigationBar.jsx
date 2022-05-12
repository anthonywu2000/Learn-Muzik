import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavigationBar = () => {
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Learn Muzik!</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/composers">Composers</Nav.Link>
                    <Nav.Link href="/theory">Fundamental Theory</Nav.Link>
                    <Nav.Link href="/majorandminor">Major and Minor Keys</Nav.Link>
                    <Nav.Link href="/composersquiz">Composers Quiz</Nav.Link>
                    <Nav.Link href="/theoryquiz">Fundamental Theory Quiz</Nav.Link>
                    <Nav.Link href="/majorandminorquiz">Major and Minor Keys Quiz</Nav.Link>
                    <Nav.Link href="/contact">Contact us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}


export default NavigationBar;