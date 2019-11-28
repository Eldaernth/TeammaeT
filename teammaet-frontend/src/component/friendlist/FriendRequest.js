import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FriendsContext} from "../../context/FriendsContext";
import {UserContext} from "../../context/UserContext";
import Button from "react-bootstrap/Button";

export default function FriendRequest(props) {

    const [friends, methods, friendIds, friendRequest] = useContext(FriendsContext);
    const [users, user, Usermethods] = useContext(UserContext);

    useEffect(() => {
        methods.getFriendRequestList(user.id);
        friendRequest.map(row => console.log(row.name));
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
                <td align={"right"}><Button>+</Button><Button>x</Button></td>
            </tr>)
        }
        </>
    )
}