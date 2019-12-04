import React, {useContext, useEffect, useState} from "react";
import {DareContext} from "../context/DareContext";
import {useParams} from 'react-router-dom'
import Axios from "axios";
import {Col, Row} from "react-bootstrap";

export default function DarePage() {
    const {dareMethods, dare} = useContext(DareContext);
    const {userId, id} = useParams();
    const [url, setUrl] = useState([]);
    useEffect(() => {
        dareMethods.getDare(userId, id);
        Axios.get(`http://localhost:8080/user/${userId}/dare/${id}/videos`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => setUrl(res.data))
    }, []);

    const onUpload = (e) => {
        const fd = new FormData();
        fd.append("video", e.target.files[0]);
        console.log(fd);
        Axios.post(`http://localhost:8080/user/${userId}/dare/${id}/uploadVideoFile`,
            fd, {
                headers: {
                    "Content-type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    'Accept': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res => console.log(res.data))
    };


    console.log(url);
    return (
        <Col>
            <input type="file" accept="video/mp4,video/x-m4v,video/*" onChange={onUpload}/>
            <h1>{dare.title}</h1>
            <Row>
                <Col className="details">
                    <h2>Details</h2>
                    <p>About the challenge:{dare.dare}</p>
                    <p>Bet:{dare.bet}</p>
                    <p>Deadline:{dare.deadline}</p>
                    <p>Owner:</p>
                    <p>Participants:</p>
                </Col>
            </Row>
            <Row>
                <Col className="videos">
                    <h2>Videos</h2>
                    {url.map((row) =>
                        <div>
                            <p>{row.user.name}</p>
                            <video width="320" height="240" controls>
                                <source src={`/Videos/${row.videoPath}`} type="video/mp4"/>
                                Your browser does not support
                            </video>
                        </div>
                    )}
                </Col>
            </Row>
        </Col>
    )
}