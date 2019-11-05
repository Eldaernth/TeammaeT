<<<<<<< HEAD
import React, {useState, Component} from 'react'
import Axios from 'axios';
import {Button, Row} from 'react-bootstrap';
import Friend from './Friend';

function asd(friendId) {
    return <Friend id="0"/>
}

export default function FriendList(props) {

    const [friends, setFriends] = useState([]);


    Axios.get(`http://localhost:8080/user/${props.userId}/friend`)
        .then((response) => {
            setFriends(response.data);
        })

    
    return (
        <div>
            {friends.map((row) =>
                    <div key = {row.id}> {row.name} </div>
=======
import React, {useState} from 'react'
import Axios from 'axios';
import {Button} from 'react-bootstrap';

export default function FriendList(props) {


    const [friends, setFriends] = useState([]);
    const id = props.match.params.userId;
    console.log(id)
    console.log("ok")
    Axios.get(`http://localhost:8080/user/${id}/friend`)
        .then((ret) => {
            setFriends(ret.data);
        })

        console.log(friends);
    return (
        <div>
            {friends.map((row) => 
                <div key={row.id}> {row.name}</div>
>>>>>>> feature_userpage
                )}
        </div>
    )
}
