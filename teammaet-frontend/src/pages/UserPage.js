import React, {useEffect, useContext} from 'react'
import {Row, Col} from 'react-bootstrap'
import '../style.css';
import {UserContext} from "../context/UserContext";
import User from "../component/user/User";
import UserButtons from "../component/user/UserButtons";

export default function UserPage(props) {

    const {userMethods} = useContext(UserContext);
    const id = props.match.params.id;

    useEffect(() => {
        userMethods.getUser(id);
    }, [id]);


    return (
        <Row className="user-page">
            <Col className="user">
                <User/>
                <Row className="user-buttons">
                    <UserButtons id={id}/>
                </Row>
            </Col>
            <Col>
                <p>STATS</p>
            </Col>
        </Row>
    )
}
