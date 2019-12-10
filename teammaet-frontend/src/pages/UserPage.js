import React from 'react'
import {Row, Col, Tabs, Tab} from 'react-bootstrap'
import '../style.css';
import PageStyling from "../styling/UserPage.module.css"
import TabsStyling from "../styling/Tabs.module.css"
import User from "../component/user/User";
import CreateDare from "../component/dare/CreateDare";
import Dares from "../component/dare/Dares";

export default function UserPage(props) {
    const id = props.match.params.id;

    return (
        <Row className={PageStyling.user_page}>
            <Col className={PageStyling.user}>
                <User id={id}/>
            </Col>
            <Col>
                <div className={TabsStyling.dares}>
                    <Tabs defaultActiveKey="Received" id="tabs">
                        <Tab eventKey="Received" title="Received" className={TabsStyling.dare_tab}>
                            <Dares isReceived={true} id={id}/>
                        </Tab>
                        <Tab eventKey="Sent" title="Sent" className={TabsStyling.dare_tab}>
                            <Dares isReceived={false} id={id}/>
                        </Tab>
                        <Tab eventKey="CreateAdd" title="+">
                            <CreateDare/>
                        </Tab>
                    </Tabs>
                </div>
            </Col>
        </Row>
    )
}
