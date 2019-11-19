import React from "react";
import {Col, Nav, Navbar, Row} from "react-bootstrap";

export default function Navigation() {
    return(
        <Navbar className="bg-light justify-content-between">
            <Navbar.Brand href="#home">IDareU</Navbar.Brand>
            <Nav activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/registration">Register</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}