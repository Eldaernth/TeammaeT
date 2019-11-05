import React,{useState} from 'react';
import Axios from "axios";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function UsersPage() {

    const [users,setUsers] = useState([])

    Axios.get('http://localhost:8080/user')
    .then((ret) => {
        setUsers(ret.data);
    })

    return (
        <div>
            {users.map((row)=>
            <Link to={`user/${row.id}`} params={row}>
            <Card key={row.id}>
            <Card.Body>{row.name}</Card.Body>
            </Card>
            </Link>)}
            
        </div>
    )
}

export default UsersPage
