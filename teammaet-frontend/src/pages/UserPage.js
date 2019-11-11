import React, {useState, useEffect, useContext} from 'react'
import {Row, Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap';
import '../style.css';
import Popup from 'reactjs-popup';
import FriendList from '../component/friendlist/FriendList'
import Sent from '../component/dare/DareList'
import CreateDare from '../component/dare/CreateDare'
import DareList from "../component/dare/DareList";
import {DareProvider} from "../context/DareContext";
import {FriendsProvider} from "../context/FriendsContext";
import {UserContext} from "../context/UserContext";

export default function Userpage(props) {

    const [users, user, methods] = useContext(UserContext);
    const id = props.match.params.id;

    useEffect(() => {
        methods.getUser(id);
    }, [id]);


    return (
        <Row className="user-page">
            <Col className="user">
                <Row className="user-info">
                    <div>
                        <h3>{user.name}</h3>
                    </div>
                </Row>
                <Row className="user-buttons">
                    <div className="user-buttons">
                        <FriendsProvider>
                            <Popup modal trigger={
                                <Button variant="secondary" block>FriendList</Button>}>
                                <FriendList isDare={false}/>
                            </Popup>
                        <DareProvider>
                            <Popup modal trigger={
                                <Button variant="secondary" block>Received List</Button>}>
                                <DareList isReceived={true}/>
                            </Popup>
                            <Popup modal trigger={
                                <Button variant="secondary" block>Sent List</Button>}>
                                <DareList isReceived={false}/>
                            </Popup>
                        <Popup modal trigger={
                            <Button variant="secondary" block>Create Dare</Button>}>
                            <CreateDare/>
                        </Popup>
                        </DareProvider>
                        </FriendsProvider>
                    </div>
                </Row>
            </Col>
            <Col>
                <p>STATS</p>
            </Col>
        </Row>
    )
}
