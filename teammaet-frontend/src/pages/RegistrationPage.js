import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import Axios from "axios";

export default function RegistrationPage(){
    const [newUser,setNewUser] = useState({
        name:"",
        email:"",
        password:""
    });

    const addNewUser = ()=>{
        {
            Axios.post(`http://localhost:8080/user/`, {
                name:newUser.name,
                email:newUser.email,
                password:newUser.password
            }, {
                headers: {
                    "Content-type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    'Accept': 'application/json'
                }
            }).then(res => console.log(res.data))
        }

    };

    return(
        <Form>
            <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={newUser.name} onChange={e => {
                    e.persist();
                    setNewUser(prev => ({...prev, name: e.target.value}))}}/>
            </Form.Group>

            <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" value={newUser.email} onChange={e => {
                    e.persist();
                    setNewUser(prev => ({...prev, email: e.target.value}))}}/>
            </Form.Group>

            <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password"value={newUser.password} onChange={e => {
                    e.persist();
                    setNewUser(prev => ({...prev, password: e.target.value}))}}/>
            </Form.Group>

            <Button onClick={addNewUser}>Register</Button>
        </Form>
    );
}