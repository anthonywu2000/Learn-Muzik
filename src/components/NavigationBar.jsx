import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import clef from '../assets/clef.ico';

export const NavigationBar = () => {
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <img src={clef} alt="clef" className="navicon" />
                <Navbar.Brand href="/">Learn Muzik!</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/composers">Composers</Nav.Link>
                    <Nav.Link href="/theory">Basic Music Theory</Nav.Link>
                    <Nav.Link href="/composersquiz">Composers Quiz</Nav.Link>
                    <Nav.Link href="/theoryquiz">Basic Music Theory Quiz</Nav.Link>
                    <Nav.Link href="/contact">Contact us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}


export default NavigationBar;