import React, {useEffect, useContext, useState} from 'react'
import {Row, Col, Tabs, Tab, Button} from 'react-bootstrap'
import '../style.css';
import {UserContext} from "../context/UserContext";
import User from "../component/user/User";
import UserButtons from "../component/user/UserButtons";
import Axios from "axios";
import {DareContext, DareProvider} from "../context/DareContext";
import DareList from "../component/dare/DareList";
import CreateDare from "../component/dare/CreateDare";
import Popup from "reactjs-popup";
import Friend from "../component/friendlist/Friend";
import {FriendsContext, FriendsProvider} from "../context/FriendsContext";
import Dares from "../component/dare/Dares";

export default function UserPage(props) {

    const {userMethods} = useContext(UserContext);
    const {dareMethods} = useContext(DareContext);
    const {friendMethods} = useContext(FriendsContext);
    const id = props.match.params.id;

    useEffect(() => {
        userMethods.getUser(id);
        userMethods.getAvatar(id);
        dareMethods.getSentDares(id);
        dareMethods.getReceivedDares(id);
        friendMethods.getFriends(id);
        }, [id]);


    return (
        <Row className="user-page">
            <Col className="user">
                <User/>
                <Row className="user-buttons">
                    <UserButtons id={id}/>
                </Row>
            </Col>
            <Col>
                <div className="dares">
                <Tabs defaultActiveKey="Received" id="tabs" className="dare-tabs">
                    <Tab eventKey="Received" title="Received" className="dare-tab">
                        <Dares isReceived={true}/>
                    </Tab>
                    <Tab eventKey="Sent" title="Sent" className="dare-tab">
                        <Dares isReceived={false}/>
                    </Tab>
                    <Tab eventKey="CreateAdd" title="+" className="create-dare-tab">
                        <CreateDare/>
                    </Tab>
                </Tabs>
                </div>
            </Col>
        </Row>
    )
}
