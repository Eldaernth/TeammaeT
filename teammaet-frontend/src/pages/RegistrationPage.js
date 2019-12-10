import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import Axios from "axios";
import useForm from "react-hook-form";
import RegistrationInputStyling from "../styling/LogonInput.module.css"
import {Redirect} from "react-router-dom";

export default function RegistrationPage() {
    const {register, handleSubmit, errors} = useForm();
    const [isSignUp, setIsSignUp] = useState(false);
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
        }).then(res => {
                console.log(res.data);
                setIsSignUp(true);
            }
        )
    };


    return (
        <Form onSubmit={handleSubmit(onSubmit)} className={RegistrationInputStyling.form}>
            <div className="form-group">
                <input className={RegistrationInputStyling.input} id="name" type="text" name="username"
                       ref={register({required: true, pattern: /[\w$?^]/, maxLength: 20})} required/>
                {errors.username && errors.username.type === "required" && <p style={{color: "red"}}>This field is
                    required</p>}{errors.username && errors.username.type === "pattern" &&
            <p style={{color: "red"}}>Name contains invalid
                character</p>}{errors.username && errors.username.type === "maxLength" &&
            <p style={{color: "red"}}>Max length is 20 character</p>}
                <label htmlFor="name" className={RegistrationInputStyling.input_label}><span
                    className={RegistrationInputStyling.input_text}>Name</span></label>
            </div>

            <div className="form-group">
                <input type="email" id="email" className={RegistrationInputStyling.input} name="email" required
                       ref={register({required: true, maxLength: 40})}/>
                {errors.email && errors.email.type === "required" && <p style={{color: "red"}}>This field is
                    required</p>}{errors.email && errors.email.type === "maxLength" &&
            <p style={{color: "red"}}>Max length is 20 character</p>}
                <label htmlFor="email" className={RegistrationInputStyling.input_label}><span
                    className={RegistrationInputStyling.input_text}>Email</span></label>
            </div>

            <div className="form-group">
                <input type="password" id="password" className={RegistrationInputStyling.input} name="password" required
                       ref={register({required: true, pattern: /[\w$?^]/, maxLength: 20})}/>
                {errors.password && errors.password.type === "required" &&
                <p style={{color: "red"}}>This field is required</p>}
                {errors.password && errors.password.type === "pattern" &&
                <p style={{color: "red"}}>Name contains invalid character</p>}
                {errors.password && errors.password.type === "maxLength" &&
                <p style={{color: "red"}}>Max length is 20 character</p>}
                <label htmlFor="password" className={RegistrationInputStyling.input_label}><span
                    className={RegistrationInputStyling.input_text}>Password</span></label>
            </div>

            <Button type="submit">Register</Button>
            {isSignUp && <Redirect to={`/login`}/>}
        </Form>
    );
}