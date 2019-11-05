import React,{useState} from 'react'
import Axios from "axios";
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Userpage(props) {

    const [user, setUser] = useState("")
    const id = props.match.params.id

    Axios.get(`http://localhost:8080/user/${id}`)
    .then((ret) => {
        setUser(ret.data);
    })

    //TODO change <a href={`http://localhost:3000/user/${id}/friend`}>
    return (
        <div>
            {user.name}
            <a href={`http://localhost:3000/user/${id}/friend`}>
                <Button>FriendList</Button>
            </a>
            <Button>Recived List</Button>
            <Button>Sent List</Button>
            <Button>Create Dare</Button>
        </div>
    )
}
