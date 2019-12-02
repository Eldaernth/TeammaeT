import React, {useContext} from "react";
import {FriendsContext} from "../context/FriendsContext";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

export default function FriendsPage() {
    const {friendBlob} = useContext(FriendsContext);

    console.log(friendBlob);
    return (
        <Row>
        {friendBlob.map((row)=>
            <Link to={`/user/${row.id}`} className="friend-avatar-link">
                <div className="card friend-card">
                    <div className="friend-avatar-icon-warp">
                    <img id="photo" className="friend-avatar-icon" src={row.friendBlob}/>
                    </div>
                    <div className="friend-name-warp">
                        <h2>{row.name}</h2>
                    </div>
                </div>
            </Link>
            )
        }</Row>
    )
}