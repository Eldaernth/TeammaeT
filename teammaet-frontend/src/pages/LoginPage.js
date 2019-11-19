import React from "react";
import {Button, Form} from "react-bootstrap";
import useForm from "react-hook-form";
import Axios from "axios";

export default function LoginForm() {
    const {handleSubmit, register, errors} = useForm();

    const onSubmit = (data) => {
        Axios.post('http://localhost:8080/login', {
            name: data.username,
            password: data.password
        }, {
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000/"
            }
        }).then((ret) => {
            console.log(ret)
        })
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="UserCredentials">
                <Form.Control type="text" placeholder="User name" name="username" ref={register({required: true})}/>
            </Form.Group>
            <Form.Group controlId="Password">
                <Form.Control type="text" placeholder="Password" name="password" ref={register({required: true})}/>
            </Form.Group>
            <Button type="submit">Login</Button>
        </Form>
    )
}