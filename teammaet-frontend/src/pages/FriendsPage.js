import React from "react";
import {Row, Tab, Tabs} from "react-bootstrap";
import {useParams} from "react-router-dom"
import FriendRequestList from "../component/friendlist/FriendRequestList";
import FriendListCards from "../component/friendlist/FriendListCards";
import AddFriend from "../component/friendlist/AddFriend";

export default function FriendsPage() {

    const {id} = useParams();



    return (
        <>
            <Row>
                <AddFriend id={id}/>
            </Row>
            <Row>
                <div className="friends">
                    <Tabs defaultActiveKey="Friends" id="tabs" className="dare-tabs">
                        <Tab eventKey="Friends" title="Friends" className="dare-tab">
                            <FriendListCards id={id}/>
                        </Tab>
                        <Tab eventKey="Requests" title="Requests" className="dare-tab">
                            <FriendRequestList id={id}/>
                        </Tab>
                        <Tab eventKey="SendFriendRequest" title="+" className="create-dare-tab">
                            <input type={"text"}/>
                        </Tab>
                    </Tabs>
                </div>
            </Row>
        </>
    )
}