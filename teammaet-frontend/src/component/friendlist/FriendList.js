import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {Button, Col, Form, Row, Table, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function FriendList(props) {

    const [friendsId,setFriendsId] = useState([]);
    const [friends, setFriends] = useState([]);
    const [name, setName] = useState("");
    const [friendId, setFriendId] = useState("");

    function handleFriendIdClick(event) {
        props.friendList(friendsId);
    }

    useEffect(() => {
        Axios.get(`http://localhost:8080/user/${props.id}/friend`)
            .then((ret) => {
                setFriends(ret.data);
            });
    }, [props, friendId]);


    const addFriend = (evt) => {
        evt.preventDefault();
        Axios.post(`http://localhost:8080/user/${props.id}/friend/add/${name}`)
            .then((ret) => {
                console.log(ret.data)
            });
    };

    const deleteFriend = (evt) => {
        evt.preventDefault();
        setFriendId(evt.target.value);
        Axios.delete(`http://localhost:8080/user/${props.id}/friend/del/${evt.target.value}`)
            .then((ret) => {
                console.log(ret.data)
            });
    };


    return (
        <div>
            <Form onSubmit={addFriend}>
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
                        {props.isDare ?(
                                <td>
                                    <Form.Check aria-label="option 1" onChange={()=>{friendsId.push(row.id)}}/>
                                </td>
                            ):
                            (
                                <td align={"right"}>
                                <Button value={row.id}  variant={"outline-danger"} onClick={deleteFriend}>X</Button>
                                </td>
                            )
                        }
                    </tr>)
                }
                </tbody>
            </Table>
            {props.isDare ?(
                <Button onClick={handleFriendIdClick}>Submit</Button>
            ):(
                ""
            )}
        </div>
    )
}
