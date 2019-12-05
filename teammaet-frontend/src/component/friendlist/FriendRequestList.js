import React, {useContext, useEffect} from 'react'
import {FriendsContext} from "../../context/FriendsContext";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import FriendCardStyling from "../../styling/FriendCard.module.css"

export default function FriendRequestList(props) {

    const {friendMethods, friendRequest} = useContext(FriendsContext);

    useEffect(() => {
        friendMethods.getFriendRequestList(props.id);
    }, []);

    console.log(friendRequest);
    return (
        <>
            {friendRequest.map((row) =>
                <div className={FriendCardStyling.friend_avatar_link}>
                    <div className={`${FriendCardStyling.card} ${FriendCardStyling.friend_card}`}>
                        <div className={FriendCardStyling.friend_avatar_icon_warp}>
                            <img id="photo" className={FriendCardStyling.friend_avatar_icon} src={row.friendBlob}/>
                        </div>
                        <div className={FriendCardStyling.friend_name_warp}>
                            <Link to={`/user/${row.id}`}><h2>{row.name}</h2></Link>
                        </div>
                        <div className={FriendCardStyling.center}>
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