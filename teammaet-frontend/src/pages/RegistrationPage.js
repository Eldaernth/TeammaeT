import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import Axios from "axios";
import useForm from "react-hook-form";

export default function RegistrationPage() {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        Axios.post(`http://localhost:8080/user/`, {
            name: data.username,
            email: data.email,
            password: data.password
        }, {
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Accept': 'application/json'
            }
        }).then(res => console.log(res.data))
    };


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" name="username" ref={register({required: true,pattern:/[\w$?^]/ , maxLength:20})}/>
                {errors.username && errors.username.type === "required" && <p style={{color: "red"}}>This field is required</p>}
                {errors.username && errors.username.type === "pattern" && <p style={{color: "red"}}>Name contains invalid character</p>}
                {errors.username && errors.username.type === "maxLength" && <p style={{color: "red"}}>Max length is 20 character</p>}
            </Form.Group>

            <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" ref={register({required: true, maxLength:40})}/>
                {errors.email && errors.email.type === "required" && <p style={{color: "red"}}>This field is required</p>}
                {errors.email && errors.email.type === "maxLength" && <p style={{color: "red"}}>Max length is 20 character</p>}
            </Form.Group>

            <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" ref={register({required: true,pattern:/[\w$?^]/ , maxLength:20})}/>
                {errors.password && errors.password.type === "required" && <p style={{color: "red"}}>This field is required</p>}
                {errors.password && errors.password.type === "pattern" && <p style={{color: "red"}}>Name contains invalid character</p>}
                {errors.password && errors.password.type === "maxLength" && <p style={{color: "red"}}>Max length is 20 character</p>}
            </Form.Group>

            <Button type="submit">Register</Button>
        </Form>
    );
}