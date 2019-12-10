import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import NavStyling from "../../styling/Nav.module.css"

export default function Navigation(props) {
    return (
        <Navbar className="bg-light justify-content-between">
            <div className={NavStyling.navigation_bar}>
                <Navbar.Brand href="/">IDareU</Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href={`/user/${localStorage.getItem("id")}`}>Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`/user/${localStorage.getItem("id")}/friends`}>Friends</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div>
                {localStorage.length === 0 ? (
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/registration">Register</Nav.Link>
                        </Nav.Item>
                    </Nav>) : (
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/" onClick={() => {
                                localStorage.clear();
                            }}>Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                )
                }
            </div>
        </Navbar>


    )
}