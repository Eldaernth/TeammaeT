import React, {useContext, useEffect, useState} from "react";
import {Button, Form, Row} from "react-bootstrap";
import {UserContext} from "../../context/UserContext";
import Axios from "axios";


export default function User(props) {

    const {user} = useContext(UserContext);

    const  onUpload =(e) => {
        const fd = new FormData();
        fd.append("avatar",e.target.files[0]);
        console.log(fd);
        Axios.post(`http://localhost:8080/user/${user.id}/uploadFile`,
            fd, {
                headers: {
                    "Content-type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    'Accept': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res => console.log(res.data))
    };

    console.log(props.blob);
    return (
        <Row className="user-info">
            <div>
                <Form encType="multipart/form-data">
                    <img src={window.URL.createObjectURL(props.blob)}/>
                    <label htmlFor="avatar" className="avatar">{user.avatar}</label>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className="file-input" onChange={(e)=>onUpload(e)}/>
                </Form>
                <h1>{user.name}</h1>
            </div>
        </Row>
    )
}