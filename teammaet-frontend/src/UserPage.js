import React,{useState} from 'react'
import Axios from "axios";
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Userpage(props) {

    const [user, setUser] = useState({
        id:0,
        name:"nama1",
        email:"dsadas",
        password:"asdfasf"
    })
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
            <Link to={`${id}/dares/received`}>
            <Button>Recived List</Button>
            </Link>
            <Link to={`${id}/dares/sent`}>
            <Button>Sent List</Button>
            </Link>
            
            <Button>Create Dare</Button>
        </div>
    )
}
