import React,{useState} from 'react';
import axios from "axios";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function UsersPage() {
    const [users,setUsers] = useState([{
        id:1,
        name:"NNNN",
        email:"asd",
        password:"dawf"
    }]
    )
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
