import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {Button, Col, Form, Row, Table, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function FriendList(props) {

    const [friends, setFriends] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:8080/user/${props.id}/friend`)
            .then((ret) => {
                setFriends(ret.data);
            });
    }, [props, friends]);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        Axios.post(`http://localhost:8080/user/${props.id}/friend/${name}`)
            .then((ret) => {
                console.log(`http://localhost:8080/user/${props.id}/friend/${name}`);
                console.log(ret.data)
            });
    };


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Container style={{
                    flexDirection: 'col',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Row>
                        <Col><h2>FriendList</h2></Col>
                        <Col><Form.Control  type="text" placeholder="Name" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}/></Col>
                        <Col><Button type="Submit" variant="primary" block>Add Friend</Button></Col>
                    </Row>
                </Container>
            </Form>

            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {friends.map((row) =>
                    <tr>
                        <td>
                            <Link to={`${row.id}`}>
                                {row.name}
                            </Link></td>
                        <td>{row.email}</td>
                    </tr>)
                }
                </tbody>
            </Table>
        </div>
    )
}