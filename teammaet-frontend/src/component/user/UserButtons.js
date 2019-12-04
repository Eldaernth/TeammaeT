import React from "react";
import {FriendsProvider} from "../../context/FriendsContext";

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