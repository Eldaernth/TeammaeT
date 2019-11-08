import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {Button, Col, Form, Row, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function FriendList(props) {

    const [friends, setFriends] = useState([]);
    const [name, setName] = useState("");


    useEffect (() => {
         Axios.get(`http://localhost:8080/user/${props.id}/friend`)
            .then((ret) => {
                setFriends(ret.data);
            });
    }, [props]);


    const handleSubmit = (evt) => {
    evt.preventDefault();
    Axios.post(`http://localhost:8080/user/${props.id}/friend/${name}`)
            .then((ret) => {
                console.log(`http://localhost:8080/user/${props.id}/friend/${name}`);
                console.log(ret.data)
            });
    };


    return (
        <Table>
            <Row>
                <Form onSubmit={handleSubmit} className="form-horizontal">
                    <Col className="center">
                        <h1>FriendList</h1>
                    </Col>

                    <Col className="center">
                        <Form.Group controlId="Title">
                            <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}} />
                        </Form.Group>
                    </Col>
                    <Col className="center">
                        <Button type="Submit" size="sm" variant="secondary" block>Add Friend</Button>
                    </Col>
                </Form>
            </Row>
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
                            <Link to={`user/${row.id}`}>
                                {row.name}
                            </Link></td>
                        <td>{row.email}</td>
                    </tr>)
                }
                </tbody>
            </Table>
        </Table>
    )
}
