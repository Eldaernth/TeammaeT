import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {FriendsContext} from "../../context/FriendsContext";
import {UserContext} from "../../context/UserContext";
import ActionButtons from "./ActionButtons";
import FriendRequest from "./FriendRequest";

export default function Friend(props) {
    const {friends, friendMethods} = useContext(FriendsContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
        friendMethods.getFriends(user.id)
    }, []);

    return (
        <>
        {friends.map((row) =>
            <tr>
                <td>
                    <Link to={`${row.id}`}>
                        {row.name}
                    </Link></td>
                <td>{row.email}</td>
                <ActionButtons methods={friendMethods} user={user} row={row} isDare={props.isDare}/>
            </tr>)
        }
        </>
    )
}