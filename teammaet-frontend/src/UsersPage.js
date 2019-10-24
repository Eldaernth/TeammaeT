import React,{useState} from 'react';
import axios from "axios";
import Card from 'react-bootstrap';

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
            {users.map((row)=>{
                <Card>
                <Card.Body>{row.name}</Card.Body>
                </Card>
            })}
        </div>
    )
}

export default UsersPage
