import React, {useContext} from "react";
import {Row} from "react-bootstrap";
import {UserContext} from "../../context/UserContext";


export default function User() {
    const [users, user, methods] = useContext(UserContext);


    return (
        <Row className="user-info">
            <div>
                <h3>{user.name}</h3>
            </div>
        </Row>
    )
}