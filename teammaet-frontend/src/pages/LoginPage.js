import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import useForm from "react-hook-form";
import Axios from "axios";
import LoginInputStyling from "../styling/LogonInput.module.css"
import {Redirect} from "react-router-dom";

export default function LoginForm() {
    const {handleSubmit, register, errors} = useForm();
    const [isSignUp, setIsSignUp] = useState(false);

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
            setIsSignUp(true);
        }).catch((error) => {
            alert(error.response.data)
        })
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input id="name" className={LoginInputStyling.input} type="text" name="username" required
                       ref={register({required: true, maxLength: 20})}/>
                {errors.username && errors.username.type === "required" &&
                <p style={{color: "red"}}>This field is required</p>}
                {errors.username && errors.username.type === "maxLength" &&
                <p style={{color: "red"}}>Max length is 20 character</p>}
                <label htmlFor="name" className={LoginInputStyling.input_label}><span
                    className={LoginInputStyling.input_text}>Username</span></label>
            </div>
            <div className="form-group">
                <input id="password" className={LoginInputStyling.input} type="password" name="password" required
                       ref={register({required: true, maxLength: 20})}/>
                {errors.password && errors.password.type === "required" &&
                <p style={{color: "red"}}>This field is required</p>}
                {errors.password && errors.password.type === "maxLength" &&
                <p style={{color: "red"}}>Max length is 20 character</p>}
                <label htmlFor="password" className={LoginInputStyling.input_label}><span
                    className={LoginInputStyling.input_text}>Password</span></label>
            </div>
            <Button type="submit">Login</Button>
            {isSignUp && <Redirect to={`user/${localStorage.getItem("id")}`}/>}
        </Form>
    )
}