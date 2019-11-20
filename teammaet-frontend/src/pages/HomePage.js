import React from "react";
import {Col, Row} from "react-bootstrap";
import Navigation from "../component/homepage/Navigation";

export default function HomePage(){
    return(
        <Col>
            <Navigation/>
            <Row>
                <p>Here comes some design and advertisement</p>
            </Row>
        </Col>
    )
}