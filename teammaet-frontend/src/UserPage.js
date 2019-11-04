import React,{useState} from 'react'
import Axios from "axios";
import {Row,Col, ListGroup} from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './style.css';
import Popup from 'reactjs-popup';

export default function Userpage(props) {

    const [user, setUser] = useState({
        id:0,
        name:"nama1",
        email:"dsadas",
        password:"asdfasf"
    })
    const id = props.match.params.id

    Axios.get(`http://localhost:8080/user/${id}`)
    .then((ret) => {
        setUser(ret.data);
    })

    //TODO change <a href={`http://localhost:3000/user/${id}/friend`}>
    return (
        <Row className="user-page">
            <Col className="user">
                <Row className="user-info">
                    <div>
                    <h3>{user.name}</h3>
                    </div>
                </Row>
                <Row className="user-buttons">
                    <div className="user-buttons">
                        <Popup modal trigger={<Button variant="secondary" block>FriendList</Button>}>
                        </Popup>
                         <Link to={`${id}/dares/received`}>
                        <Button variant="secondary" block>Recived List</Button>
                        </Link>
                        <Link to={`${id}/dares/sent`}>
                        <Button variant="secondary" block>Sent List</Button>
                        </Link>
                        
                        <Button variant="secondary" block >Create Dare</Button>
                    </div>
                </Row>
            </Col>
            <Col >
                <p>STATS</p>
            </Col>
        </Row>
    )
}
