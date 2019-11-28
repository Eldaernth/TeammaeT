import React, {useEffect, useContext, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import '../style.css';
import {UserContext} from "../context/UserContext";
import User from "../component/user/User";
import UserButtons from "../component/user/UserButtons";
import Axios from "axios";

export default function UserPage(props) {

    const [blob, setBlob] = useState();
    const {userMethods} = useContext(UserContext);
    const id = props.match.params.id;

    useEffect(() => {
        userMethods.getUser(id);
        Axios.get(`http://localhost:8080/user/${id}/avatar`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                console.log(response.data);
                setBlob(new Blob([response.data], {type: 'image/jpeg'}))
            })
            .catch(ex => {
                console.error(ex);
            });
    }, [id]);


    return (
        <Row className="user-page">
            <Col className="user">
                <User blob={blob}/>
                <Row className="user-buttons">
                    <UserButtons id={id}/>
                </Row>
            </Col>
        </Row>
    )
}
