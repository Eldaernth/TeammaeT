import React, {useContext, useEffect} from 'react'
import {Dropdown, Table} from 'react-bootstrap';
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FriendsContext} from "../../context/FriendsContext";

export default function FriendListCards(props) {

    const {friends, friendMethods,setFriends} = useContext(FriendsContext);

    useEffect(() => {
        setFriends([]);
        friendMethods.getFriends(props.id)
    }, []);

    return (
        <>
            {friends.map((row) =>
                <div className="friend-avatar-link">
                    <div className="card friend-card">
                        <div className="friend-avatar-icon-warp">
                            <img id="photo" className="friend-avatar-icon" src={row.friendBlob}/>
                        </div>
                        <div className="friend-name-warp">
                            <Link to={`/user/${row.id}`}><h2>{row.name}</h2></Link>
                        </div>
                        <div className="center">
                            <Dropdown className="small-button center">
                                <Dropdown.Toggle variant={"primary"}><FontAwesomeIcon
                                    icon={faChevronDown}/></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={(e) => friendMethods.deleteFriend(e, props.id, row.id)}>
                                        <FontAwesomeIcon icon={faTrashAlt}/> <span
                                        className={"asd"}>Delete</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            )}</>
    )
}
