import React, {useState, useEffect, useContext} from 'react'
import {Button, Col, Form, Row, Table, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {FriendsContext} from "../context/FriendsContext";
import {UserContext} from "../context/UserContext";

export default function FriendList(props) {
    const [users,user,userMethods] = useContext(UserContext);
    const [friends, methods] = useContext(FriendsContext);
    const [friendsId, setFriendsId] = useState([]);
    const [name, setName] = useState("");
    function handleFriendIdClick(event) {
        props.friendList(friendsId);
    }

    useEffect(() => {
        methods.getFriends(user.id)
    }, [props]);


    return (
        <div>
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
                        {props.isDare ? (
                                <td>
                                    <Form.Check aria-label="option 1" onChange={() => {
                                        friendsId.push(row.id)
                                    }}/>
                                </td>
                            ) :
                            (
                                <td align={"right"}>
                                    <Button value={row.id} variant={"outline-danger"}
                                            onClick={()=>methods.deleteFriend(user.id)}>X</Button>
                                </td>
                            )
                        }
                    </tr>)
                }
                </tbody>
            </Table>
            {props.isDare ? (
                <Button onClick={handleFriendIdClick}>Submit</Button>
            ) : (
                ""
            )}
        </div>
    )
}
