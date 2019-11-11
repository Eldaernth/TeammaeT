import React, {useState} from 'react'
import Axios from 'axios';
import {Button, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Form} from "react-bootstrap";

export default function FriendList(props) {
    const [friendsId,setFriendsId] = useState([]);
    const [friends, setFriends] = useState([]);

    function handleFriendIdClick(event) {
        props.friendList(friendsId);
    }

    Axios.get(`http://localhost:8080/user/${props.id}/friend`)
        .then((ret) => {
            setFriends(ret.data);
        });
    return (
        <div>
            <h1>FriendList</h1>

            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {friends.map((row) =>
                    <tr>
                        <td>
                        <Link to={`user/${row.id}`}>
                        {row.name}
                        </Link></td>
                        <td>{row.email}</td>
                        {props.isDare ?(
                                <td>
                                    <Form.Check aria-label="option 1" onChange={()=>{friendId.push(row.id)}}/>
                                </td>
                            ):
                            (
                                ""
                            )
                        }
                    </tr>)
                    }
                </tbody>
            </Table>
            {props.isDare ?(
                <Button onClick={handleFriendIdClick}>Submit</Button>
            ):(
                ""
            )}
        </div>
    )
}
