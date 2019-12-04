import React, {useContext, useEffect} from "react";
import {FriendsContext} from "../context/FriendsContext";
import {Link} from "react-router-dom";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import {useParams} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faEllipsisV, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {Button, DropdownButton, Dropdown} from "react-bootstrap";
import Dares from "../component/dare/Dares";
import FriendRequestList from "../component/friendlist/FriendRequestList";
import FriendListCards from "../component/friendlist/FriendListCards";

export default function FriendsPage() {

    const {id} = useParams();

    return (
        <>
            <Row>
                <div className="friends">
                    <Tabs defaultActiveKey="Received" id="tabs" className="dare-tabs">
                        <Tab eventKey="Friends" title="Friends" className="dare-tab">
                            <FriendListCards id={id}/>
                        </Tab>
                        <Tab eventKey="Requests" title="Requests" className="dare-tab">
                            <FriendRequestList id={id}/>
                        </Tab>
                        <Tab eventKey="SendFriendRequest" title="+" className="create-dare-tab">
                            asdd
                        </Tab>
                    </Tabs>
                </div>
            </Row>
        </>
    )
}