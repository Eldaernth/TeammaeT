import React, {useContext, useEffect, useState} from "react";
import {DareContext} from "../context/DareContext";
import {useParams} from 'react-router-dom'
import Axios from "axios";
import {Col, Form, Row} from "react-bootstrap";
import DarePageStyling from "../styling/DarePage.module.css"
import FileInputStyling from "../styling/User.module.css"

export default function DarePage() {
    const {dareMethods, dare, dareDependency, url} = useContext(DareContext);
    const {userId, id} = useParams();
    useEffect(() => {
        dareMethods.getDare(userId, id);
        dareMethods.getVideos(userId, id)
    }, [dareDependency]);

    return (
        <Col className={DarePageStyling.dare_page}>
            <Form encType="multipart/form-data">
                {<label htmlFor="avatar" className="btn btn-secondary">Add video</label>}
                <input type="file" id="avatar" name="avatar" accept="video/mp4,video/x-m4v,video/*"
                       className={FileInputStyling.file_input}
                       onChange={(e) => dareMethods.onUpload(e,userId,id)}/>
            </Form>
            <h1>{dare.title}</h1>
            <Row>
                <Col className={DarePageStyling.details}>
                    <h2>Details</h2>
                    <p>About the challenge:{dare.dare}</p>
                    <p>Bet:{dare.bet}</p>
                    <p>Deadline:{dare.deadline}</p>
                    <p>Owner:</p>
                    <p>Participants:</p>
                </Col>
            </Row>
            <Row>
                <Col className={DarePageStyling.videos}>
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