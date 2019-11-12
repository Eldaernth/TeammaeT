import React, {useContext, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FriendsContext} from "../../context/FriendsContext";
import {UserContext} from "../../context/UserContext";

export default function AddFriend() {
    const [users,user,userMethods] = useContext(UserContext);
    const [friends, methods,friendIds] = useContext(FriendsContext);
    const [name, setName] = useState("");

    return(
        <Form onSubmit={(e) => methods.addFriend(e, name,user.id)}>
            <Container style={{
                flexDirection: 'col',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Row>
                    <Col><h2>FriendList</h2></Col>
                    <Col><Form.Control type="text" placeholder="Name" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}/></Col>
                    <Col><Button type="Submit" variant="primary" block>Add Friend</Button></Col>
                </Row>
            </Container>
        </Form>
    )
}