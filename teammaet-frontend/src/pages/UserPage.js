import React, {useEffect, useContext} from 'react'
import {Row, Col, Tabs, Tab} from 'react-bootstrap'
import '../style.css';
import PageStyling from "../styling/UserPage.module.css"
import TabsStyling from "../styling/Tabs.module.css"
import {UserContext} from "../context/UserContext";
import User from "../component/user/User";
import {DareContext} from "../context/DareContext";
import CreateDare from "../component/dare/CreateDare";
import {FriendsContext} from "../context/FriendsContext";
import Dares from "../component/dare/Dares";

export default function UserPage(props) {

    const {userMethods,blob} = useContext(UserContext);
    const {dareMethods} = useContext(DareContext);
    const {friendMethods,setFriends} = useContext(FriendsContext);
    const id = props.match.params.id;

    useEffect(() => {
        setFriends([]);
        userMethods.getUser(id);
        userMethods.getAvatar(id);
        dareMethods.getSentDares(id);
        dareMethods.getReceivedDares(id);
        friendMethods.getFriends(id);
        }, [id]);


    return (
        <Row className={PageStyling.user_page}>
            <Col className={PageStyling.user}>
                <User/>
            </Col>
            <Col>
                <div className={TabsStyling.dares}>
                <Tabs defaultActiveKey="Received" id="tabs">
                    <Tab eventKey="Received" title="Received" className={TabsStyling.dare_tab}>
                        <Dares isReceived={true}/>
                    </Tab>
                    <Tab eventKey="Sent" title="Sent" className={TabsStyling.dare_tab}>
                        <Dares isReceived={false}/>
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
