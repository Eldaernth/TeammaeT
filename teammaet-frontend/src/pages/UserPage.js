import React,{useState, useEffect} from 'react'
import Axios from "axios";
import {Row,Col} from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import '../style.css';
import Popup from 'reactjs-popup';
import FriendList from '../component/friendlist/FriendList'
import Sent from '../component/dare/SentDares'
import CreateDare from '../component/dare/CreateDare'
import ReceivedList from "../component/dare/ReceivedList";
import {ReceivedDareProvider} from '../component/dare/ReceivedDareContext';
import {SentDareProvider} from '../component/dare/SentDareContext';

export default function Userpage(props) {

    const [user, setUser] = useState("");
    const id = props.match.params.id;

    useEffect (() => {
        Axios.get(`http://localhost:8080/user/${id}`)
            .then((ret) => {
                setUser(ret.data);
            });
    }, [id]);

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
                            <FriendList id={user.id} isDare={false}/>
                        </Popup>
                        <ReceivedDareProvider id={user.id}>
                        <Popup modal trigger={
                        <Button variant="secondary" block>Received List</Button>}>
                            <ReceivedList/>
                        </Popup>
                        </ReceivedDareProvider>
                        <SentDareProvider id={user.id}>
                        <Popup modal trigger={
                        <Button variant="secondary" block>Sent List</Button>}>
                            <Sent/>
                        </Popup>
                        </SentDareProvider>
                        <Popup modal trigger={
                        <Button variant="secondary" block >Create Dare</Button>}>
                            <CreateDare id={user.id}/>
                        </Popup>
                    </div>
                </Row>
            </Col>
            <Col >
                <p>STATS</p>
            </Col>
        </Row>
    )
}
