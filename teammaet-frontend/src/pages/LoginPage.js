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
            <div className="form-group">
                <input id="name" className="input" type="text" name="username"  required ref={register({required: true, maxLength: 20})}/>
                {errors.username && errors.username.type === "required" && <p style={{color: "red"}}>This field is required</p>}
                {errors.username && errors.username.type === "maxLength" && <p style={{color: "red"}}>Max length is 20 character</p>}
                <label htmlFor="name" className="input-label"><span className="input-text">Username</span></label>
            </div>
            <div className="form-group">
                <input id="password" className="input" type="password" name="password" required ref={register({required: true, maxLength: 20})}/>
                {errors.password && errors.password.type === "required" && <p style={{color: "red"}}>This field is required</p>}
                {errors.password && errors.password.type === "maxLength" && <p style={{color: "red"}}>Max length is 20 character</p>}
                <label htmlFor="password" className="input-label"><span className="input-text">Password</span></label>
            </div>
            <Button type="submit">Login</Button>
        </Form>
    )
}