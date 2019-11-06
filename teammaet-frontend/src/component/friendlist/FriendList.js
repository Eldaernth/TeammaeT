import React, {useState} from 'react'
import Axios from 'axios';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function FriendList(props) {


    const [friends, setFriends] = useState([]);
    Axios.get(`http://localhost:8080/user/${props.id}/friend`)
        .then((ret) => {
            setFriends(ret.data);
        });

        console.log(friends);
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
                    </tr>)
                    }
                </tbody>
            </Table>
        </div>
    )
}
