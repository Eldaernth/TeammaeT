import React, {useContext, useState} from "react";
import {Row} from "react-bootstrap";
import {UserContext} from "../../context/UserContext";
import Axios from "axios";


export default function User() {
    const {user} = useContext(UserContext);
    const onUpload = (e) => {
        Axios.put(`http://localhost:8080/user/`, {
            avatar:e
        }, {
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Accept': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`

            }
        }).then(res => console.log(res.data))
    };
    return (
        <Row className="user-info">
            <div>
                <form>
                    <label htmlFor="avatar" className="avatar">+</label>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className="file-input" onChange={(e)=>onUpload(e.target.value)}/>
                </form>
                <h1>{user.name}</h1>
            </div>
        </Row>
    )
}