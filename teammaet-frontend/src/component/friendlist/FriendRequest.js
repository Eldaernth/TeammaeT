import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {FriendsContext} from "../../context/FriendsContext";
import {UserContext} from "../../context/UserContext";
import Button from "react-bootstrap/Button";

export default function FriendRequest(props) {

    const {friendMethods, friendRequest} = useContext(FriendsContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
        friendMethods.getFriendRequestList(user.id);
    }, []);

    return (
        <>
        {friendRequest.map(row =>
            <tr>
                <td>
                    <Link to={`${row.id}`}>
                        {row.name}
                    </Link>
                </td>
                <td>
                    {row.email}
                </td>
                <td align={"right"}>
                    <Button variant={"outline-success"}
                            onClick={(e) => friendMethods.acceptFriendRequest(e, user.id, row.id)}>+</Button>
                    <Button variant={"outline-danger"}
                        onClick={(e) => friendMethods.declineFriendRequest(e, user.id, row.id)}>-</Button>
                </td>
            </tr>)
        }
        </>
    )
}