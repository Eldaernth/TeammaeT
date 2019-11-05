import React, {useState} from 'react'
import Axios from 'axios';
import {Button} from 'react-bootstrap';

export default function Friend(props) {

    const [friends, setFriends] = useState("");

    Axios.get(`http://localhost:8080/user/${props.id}`)
    .then((response) => {
        setFriends(response.data);
    })

    return (
        <div>
            <div key = {friends.id}> {friends.name} <Button>del</Button></div>
        </div>
    )
}