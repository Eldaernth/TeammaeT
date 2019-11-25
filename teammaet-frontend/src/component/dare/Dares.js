import React, {useContext, useEffect} from "react";
import {Button} from "react-bootstrap";
import {UserContext} from "../../context/UserContext";
import {DareContext} from "../../context/DareContext";

export default function Dares(props) {
    const [users, user, userMethods] = useContext(UserContext);
    const [received, sent, dareMethods] = useContext(DareContext);

    useEffect(() =>
            props.isReceived ? dareMethods.getReceivedDares(user.id) : dareMethods.getSentDares(user.id),
        [props.isReceived, user.id]); //removed userMethods (loop)

    return (
        <tbody>
        {props.isReceived ?
            received.map((row) =>
                <tr>
                    <td> {row.title}</td>
                    <td> {row.dare}</td>
                    <td><Button value={row.id} variant="outline-danger"
                                onClick={(e) => dareMethods.deleteDare(e, user.id)}>X</Button></td>
                </tr>
            ) :
            sent.map((row) =>
                <tr>
                    <td> {row.title}</td>
                    <td> {row.dare}</td>
                    <td><Button value={row.id} variant="outline-danger"
                                onClick={(e) => dareMethods.deleteDare(e, user.id)}>X</Button></td>
                </tr>
            )}
        </tbody>
    )

}