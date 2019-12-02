import React from "react";
import {FriendsProvider} from "../../context/FriendsContext";
import Popup from "reactjs-popup";
import {Button} from "react-bootstrap";
import FriendList from "../friendlist/FriendList";
import {DareProvider} from "../../context/DareContext";
import DareList from "../dare/DareList";
import CreateDare from "../dare/CreateDare";

export default function UserButtons(props) {
    return (<>{
        props.id === localStorage.getItem("id") ? (
        <div className="user-buttons">
            <FriendsProvider>
                {/*<Popup modal trigger={*/}
                {/*    <Button variant="secondary" block>FriendList</Button>}>*/}
                {/*    <FriendList isDare={false}/>*/}
                {/*</Popup>*/}
            </FriendsProvider>
        </div>
        ) : ("")}</>
    )
}