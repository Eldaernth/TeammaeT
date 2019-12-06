import React, {useContext, useEffect, useState} from "react";
import {Form, Row} from "react-bootstrap";
import {UserContext} from "../../context/UserContext";
import Axios from "axios";
import {FriendsContext} from "../../context/FriendsContext";
import {Link} from "react-router-dom";
import UserStyling from "../../styling/User.module.css"
import UserFriends from "./UserFriends";


export default function User({id}) {

    const {user, userBlob, userMethods,blobDependency} = useContext(UserContext);

    useEffect(() => {
            userMethods.getUser(id);
            userMethods.getAvatar(id);
        },[id,blobDependency]
    )

    return (
        <Row className={UserStyling.user_info}>
            <div>
                <Form encType="multipart/form-data">
                    <label htmlFor="avatar" className={UserStyling.avatar}><img id="photo"
                                                                                className={UserStyling.avatar_icon}
                                                                                src={userBlob}/></label>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"
                           className={UserStyling.file_input}
                           onChange={(e) => userMethods.onUpload(e)}/>
                </Form>
                <h1>{user.name}</h1>
                <UserFriends id={id}/>
                <Link to={`${user.id}/friends`}>more</Link>
            </div>
        </Row>
    )
}