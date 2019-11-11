import React, {useContext, useEffect, useState} from 'react';
import Axios from 'axios';
import {Button, Table} from "react-bootstrap";
import {ReceivedDareContext} from "./ReceivedDareContext";


function ReceivedList(props) {
    const [dares,setDares,methods] = useContext(ReceivedDareContext);

    useEffect(()=> {methods.getReceivedDares();},[methods]);

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
                        <td><Button value={row.id} variant="outline-danger" onClick={methods.deleteDare}>X</Button></td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default ReceivedList
