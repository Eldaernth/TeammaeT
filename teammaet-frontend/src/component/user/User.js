import React, {useContext} from "react";
import {Row} from "react-bootstrap";
import {UserContext} from "../../context/UserContext";


export default function User() {
    const {user} = useContext(UserContext);


    return (
        <Row className="user-info">
            <div>
                <form>
                    <label htmlFor="avatar" className="avatar">+</label>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className="file-input"/>
                </form>
                <h3>{user.name}</h3>
            </div>
        </Row>
    )
}