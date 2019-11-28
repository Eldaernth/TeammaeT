import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {FriendsContext} from "../../context/FriendsContext";
import {UserContext} from "../../context/UserContext";
import ActionButtons from "./ActionButtons";
import FriendRequest from "./FriendRequest";

export default function Friend(props) {
    const [friends, methods, friendIds] = useContext(FriendsContext);
    const [users, user, Usermethods] = useContext(UserContext);

    useEffect(() => {
        methods.getFriends(user.id)
    }, []);

    return (
        <tbody>
        <FriendRequest/>
        {friends.map((row) =>
            <tr>
                <td>
                    <Link to={`${row.id}`}>
                        {row.name}
                    </Link></td>
                <td>{row.email}</td>
                <ActionButtons methods={methods} user={user} row={row} isDare={props.isDare}/>
            </tr>)
        }
        </tbody>
    )
}