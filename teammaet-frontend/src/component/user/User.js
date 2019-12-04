import React, {useContext, useEffect, useState} from "react";
import {Button, Form, Row} from "react-bootstrap";
import {UserContext} from "../../context/UserContext";
import Axios from "axios";
import {FriendsContext} from "../../context/FriendsContext";
import {Link} from "react-router-dom";
import ActionButtons from "../friendlist/ActionButtons";


export default function User(props) {

    const {user, blob} = useContext(UserContext);
    const {friends, setFriends, friendBlob} = useContext(FriendsContext);

    const onUpload = (e) => {
        const fd = new FormData();
        fd.append("avatar", e.target.files[0]);
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
    console.log(friendBlob);
    return (
        <Row className="user-info">
            <div>
                <Form encType="multipart/form-data">
                    <label htmlFor="avatar" className="avatar"><img id="photo" className="avatar-icon"
                                                                    src={blob}/></label>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className="file-input"
                           onChange={(e) => onUpload(e)}/>
                </Form>
                <h1>{user.name}</h1>
                {friendBlob.map((row) =>
                    <Link to={`/user/${row.id}`} className="link">
                        <div className="img-wrap">
                            <label className="avatar"><img id="photo" className="friend-icon"
                                                           src={row.friendBlob}/></label>
                            <p className="img-description">{row.name}</p>
                        </div>
                    </Link>
                )
                }
                <Link to={`${user.id}/friends`}>more</Link>
            </div>
        </Row>
    )
}