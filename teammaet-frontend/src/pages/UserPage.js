import React, {useEffect, useContext} from 'react'
import {Row, Col} from 'react-bootstrap'
import '../style.css';
import {UserContext} from "../context/UserContext";
import User from "../component/user/User";
import UserButtons from "../component/user/UserButtons";

export default function Userpage(props) {

    const [users, user, methods] = useContext(UserContext);
    const id = props.match.params.id;

    useEffect(() => {
        methods.getUser(id);
    }, [methods, id]);


    return (
        <Row className="user-page">
            <Col className="user">
                <User/>
                <Row className="user-buttons">
                    <UserButtons/>
                </Row>
            </Col>
            <Col>
                <p>STATS</p>
            </Col>
        </Row>
    )
}
