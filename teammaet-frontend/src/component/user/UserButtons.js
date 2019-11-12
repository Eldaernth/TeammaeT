import React from "react";
import {FriendsProvider} from "../../context/FriendsContext";
import Popup from "reactjs-popup";
import {Button} from "react-bootstrap";
import FriendList from "../friendlist/FriendList";
import {DareProvider} from "../../context/DareContext";
import DareList from "../dare/DareList";
import CreateDare from "../dare/CreateDare";

export default function () {
    return(
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
    )
}