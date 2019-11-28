import React, {useEffect, useContext, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import '../style.css';
import {UserContext} from "../context/UserContext";
import User from "../component/user/User";
import UserButtons from "../component/user/UserButtons";
import Axios from "axios";
import Navigation from "../component/homepage/Navigation";

export default function UserPage(props) {

    const [blob, setBlob] = useState();
    const {userMethods} = useContext(UserContext);
    const id = props.match.params.id;

    useEffect(() => {
        userMethods.getUser(id);
        Axios.get(`http://localhost:8080/user/${id}/avatar`, {
            responseType:"arraybuffer",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                let arrayBufferView = new Uint8Array( response.data );
                let blob = new Blob( [ arrayBufferView ], { type: "image/png" } );
                let urlCreator = window.URL || window.webkitURL;
                let imageUrl = urlCreator.createObjectURL( blob );
                let img = document.querySelector( "#photo" );
                img.src = imageUrl;
                console.log(img);
            })
            .catch(ex => {
                console.error(ex);
            });
    }, [id]);


    return (
        <Row className="user-page">
            <Col className="user">
                <Navigation/>
                <User blob={blob}/>
                <Row className="user-buttons">
                    <UserButtons id={id}/>
                </Row>
            </Col>
        </Row>
    )
}
