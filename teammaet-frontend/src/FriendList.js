import React, {useState} from 'react'
import Axios from 'axios';
import {Button} from 'react-bootstrap';

export default function FriendList(props) {


    const [friends, setFriends] = useState([
        {
        id:1,
        name:"nama2",
        email:"dsadas",
        password:"asdfasf"
        }
    ]);
    const id = props.match.params.userId;
    Axios.get(`http://localhost:8080/user/${id}/friend`)
        .then((ret) => {
            setFriends(ret.data);
        })

        console.log(friends);
    return (
        <div>
            {friends.map((row) => 
                <div key={row.id}> {row.name}</div>
                )}
        </div>
    )
}
