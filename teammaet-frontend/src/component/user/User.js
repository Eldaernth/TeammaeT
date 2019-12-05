import React, {useContext} from "react";
import {Form, Row} from "react-bootstrap";
import {UserContext} from "../../context/UserContext";
import Axios from "axios";
import {FriendsContext} from "../../context/FriendsContext";
import {Link} from "react-router-dom";
import UserStyling from "../../styling/User.module.css"


export default function User(props) {

    const {user, blob} = useContext(UserContext);
    const {friends} = useContext(FriendsContext);

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
    return (
        <Row className={UserStyling.user_info}>
            <div>
                <Form encType="multipart/form-data">
                    <label htmlFor="avatar" className={UserStyling.avatar}><img id="photo" className={UserStyling.avatar_icon}
                                                                    src={blob}/></label>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className={UserStyling.file_input}
                           onChange={(e) => onUpload(e)}/>
                </Form>
                <h1>{user.name}</h1>
                {friends.map((row) =>
                    <Link to={`/user/${row.id}`} className={UserStyling.link}>
                        <div className={UserStyling.img_wrap}>
                            <label className={UserStyling.avatar}><img id="photo" className={UserStyling.friend_icon}
                                                           src={row.friendBlob}/></label>
                            <p className={UserStyling.img_description}>{row.name}</p>
                        </div>
                    </Link>
                )
                }
                <Link to={`${user.id}/friends`}>more</Link>
            </div>
        </Row>
    )
}