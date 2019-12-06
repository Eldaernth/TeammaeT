import React, {useContext, useEffect} from 'react'
import {Card, Dropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FriendsContext} from "../../context/FriendsContext";
import FriendCardStyling from "../../styling/FriendCard.module.css";

export default function FriendListCards(props) {

    const {friends, friendMethods,setFriends,friendDependency} = useContext(FriendsContext);

    useEffect(() => {
        setFriends([]);
        friendMethods.getFriends(props.id)
    }, [friendDependency]);

    return (
        <>
            {friends.map((row) =>
                <div className={FriendCardStyling.friend_avatar_link}>
                    <Card className={`${FriendCardStyling.card} ${FriendCardStyling.friend_card}`}>
                        <div className={FriendCardStyling.friend_avatar_icon_warp}>
                            <img id="photo" className={FriendCardStyling.friend_avatar_icon} src={row.friendBlob}/>
                        </div>
                        <div className={FriendCardStyling.friend_name_warp}>
                            <Link to={`/user/${row.id}`}><h2>{row.name}</h2></Link>
                        </div>
                        <div className={FriendCardStyling.center}>
                            <Dropdown className={`small-button ${FriendCardStyling.center}`}>
                                <Dropdown.Toggle variant={"primary"}><FontAwesomeIcon
                                    icon={faChevronDown}/></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={(e) => friendMethods.deleteFriend(e, props.id, row.id)}>
                                        <FontAwesomeIcon icon={faTrashAlt}/> <span className={"asd"}>Delete</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card>
                </div>
            )}</>
    )
}
