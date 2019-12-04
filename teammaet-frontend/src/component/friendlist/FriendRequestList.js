import React, {useContext, useEffect} from 'react'
import {FriendsContext} from "../../context/FriendsContext";
import {UserContext} from "../../context/UserContext";
import {Link} from "react-router-dom";
import {Card, Image, Button, Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faTrashAlt, faCheck} from "@fortawesome/free-solid-svg-icons";

export default function FriendRequestList(props) {

    const {friendMethods, friendRequest} = useContext(FriendsContext);

    useEffect(() => {
        friendMethods.getFriendRequestList(props.id);
    }, []);

    console.log(friendRequest);
    return (
        <>
            {friendRequest.map((row) =>
                <div className="friend-avatar-link">
                    <div className="card friend-card">
                        <div className="friend-avatar-icon-warp">
                            <img id="photo" className="friend-avatar-icon" src={row.friendBlob}/>
                        </div>
                        <div className="friend-name-warp">
                            <Link to={`/user/${row.id}`}><h2>{row.name}</h2></Link>
                        </div>
                        <div className="center">
                            <Button onClick={(e) => friendMethods.acceptFriendRequest(e, props.id, row.id)} variant={"success"}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </Button>
                            <Button onClick={(e) => friendMethods.declineFriendRequest(e, props.id, row.id)} variant={"danger"}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}