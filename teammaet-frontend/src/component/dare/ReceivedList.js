import React, {useContext, useState} from 'react';
import Axios from 'axios';
import {Button, Table} from "react-bootstrap";
import {ReceivedDareContext} from "./ReceivedDareContext";


function ReceivedList(props) {
    const [dares,setDares] = useContext(ReceivedDareContext);

    const deleteDare = (evt) => {
        evt.preventDefault();
        Axios.delete(`http://localhost:8080/user/${props.id}/dare/${evt.target.value}`)
            .then((ret) => {
                console.log(ret.data)
            });
    };

    console.log(dares);
    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Massage</th>
                </tr>
                </thead>
                <tbody>
                {dares.map((row) =>
                    <tr>
                        <td > {row.title}</td>
                        <td> {row.dare}</td>
                        <td><Button value={row.id} variant="outline-danger" onClick={deleteDare}>X</Button></td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default ReceivedList
