import React, {useContext} from "react";
import {Button} from "react-bootstrap";
import {UserContext} from "../../context/UserContext";
import {DareContext} from "../../context/DareContext";
export default function DareCard({row}) {
    const {user} = useContext(UserContext);
    const {dareMethods} = useContext(DareContext);
    return (
    <div className="card">
        <div className="card-top">
            <h2>{row.title}</h2>
            <Button className="card-button" value={row.id} variant="outline-danger"
                    onClick={(e) => dareMethods.deleteDare(e, user.id)}>X</Button>
        </div>
        <div className="card-body">
            <div className="card-body-1">
                <p>Challenge:{row.dare}</p>
                <p>Bet:{row.bet}</p>
            </div>
            <div className="card-body-2">
                <p>Progress:{row.progress}</p>
            </div>
        </div>
        <div className="card-footer">
            <p>Deadline:{row.deadline}</p>
        </div>
    </div>
    )}