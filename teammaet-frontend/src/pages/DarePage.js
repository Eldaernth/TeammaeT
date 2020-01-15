import React, {useContext, useEffect} from "react";
import {DareContext} from "../context/DareContext";
import {Link, Redirect, useParams} from 'react-router-dom'
import {Button, Col, Form, Row} from "react-bootstrap";
import DarePageStyling from "../styling/DarePage.module.css"
import FileInputStyling from "../styling/User.module.css"
import UserStyling from "../styling/User.module.css";

export default function DarePage() {
    const {dareMethods, dare, dareDependency, url, isExist, owner, participants} = useContext(DareContext);
    const {userId, id} = useParams();
    useEffect(() => {
        dareMethods.getDare(userId, id);
        dareMethods.getVideos(userId, id)
    }, [dareDependency]);
    console.log(url);
    return (
        <Col className={DarePageStyling.dare_page}>
            <Button variant="secondary" className={DarePageStyling.delete_btn}
                    onClick={(e) => dareMethods.deleteDare(e, userId, id)}>Delete</Button>
            <h1>{dare.title}</h1>
            <Row>
                <Col className={DarePageStyling.details}>
                    <h2>Details</h2>
                    <p>About the challenge:{dare.dare}</p>
                    <p>Bet:{dare.bet}</p>
                    <p>Deadline:{dare.deadline}</p>
                    <p>Owner:{owner.name}</p>
                    <p>Participants:{participants.map(user => `${user.name} `)}</p>
                </Col>
            </Row>
            <Row>
                <Col className={DarePageStyling.videos}>
                    <Form encType="multipart/form-data">
                        {<label htmlFor="avatar" className="btn btn-secondary">Add video</label>}
                        <input type="file" id="avatar" name="avatar" accept="video/mp4,video/x-m4v,video/*"
                               className={FileInputStyling.file_input}
                               onChange={(e) => dareMethods.onUpload(e, userId, id)}/>
                    </Form>
                    <h2>Videos</h2>
                    <div className={DarePageStyling.video_panel}>
                    {url.map((row) =>
                            <div>
                            <video width="320" height="240" controls>
                                <source src={`/Videos/${row.videoPath}`} type="video/mp4"/>
                                Your browser does not support
                            </video>
                            <Link to={`/user/${row.userId}`}
                                  className={`${UserStyling.link} ${DarePageStyling.video_wraper}`}>
                                <div className={DarePageStyling.user_wrapper}>
                                    <div className={DarePageStyling.img_wrap}>
                                        <label htmlFor="avatar" className={UserStyling.avatar}><img id="photo"
                                                                                                    className={DarePageStyling.friend_icon}
                                                                                                    src={row.videoBlob}
                                                                                                    alt=""/></label>
                                    </div>
                                    <h5>{row.userName}</h5>
                                </div>
                            </Link>
                            </div>
                    )}
                    </div>
                </Col>
            </Row>
            {isExist || <Redirect to={`/user/${localStorage.getItem("id")}`}/>}
        </Col>
    )
}