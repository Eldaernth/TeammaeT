import React from "react";
import {Button, Form} from "react-bootstrap";
import useForm from "react-hook-form";
import Axios from "axios";

export default function LoginForm() {
    const {handleSubmit, register, errors} = useForm();


    const onSubmit = (data) => {
        Axios.post('http://localhost:8080/login', {
            userName: data.username,
            password: data.password
        }, {
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        }).then((ret) => {
            localStorage.setItem("token", ret.data.token);
            localStorage.setItem("id", ret.data.id);
            window.location.href = `/user/${ret.data.id}`
        }).catch((error) => {alert(error.response.data)})
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="UserCredentials">
                <Form.Control type="text" placeholder="User name" name="username" ref={register({required: true, maxLength: 20})}/>
                {errors.username && errors.username.type === "required" && <p style={{color: "red"}}>This field is required</p>}
                {errors.username && errors.username.type === "maxLength" && <p style={{color: "red"}}>Max length is 20 character</p>}
            </Form.Group>
            <Form.Group controlId="Password">
                <Form.Control type="password" placeholder="Password" name="password" ref={register({required: true, maxLength: 20})}/>
                {errors.password && errors.password.type === "required" && <p style={{color: "red"}}>This field is required</p>}
                {errors.password && errors.password.type === "maxLength" && <p style={{color: "red"}}>Max length is 20 character</p>}
            </Form.Group>
            <Button type="submit">Login</Button>
        </Form>
    )
}