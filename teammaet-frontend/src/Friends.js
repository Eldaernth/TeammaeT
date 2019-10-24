import React, {useState} from 'react'
import Axios from 'axios';
import {Button } from 'react-bootstrap';

export default function Friends() {


    const [friends, setFriends] = useState([]);

    Axios.get('http://localhost:8080/user')
        .then((ret) => {
            setFriends(ret.data);
        })

    return (
        <div>
            {friends.map((row) => 
                <div key={row.name}>{row.name}</div>
                )}
                <Button>CUCCCCCCOSBULI</Button>
        </div>
    )
}
