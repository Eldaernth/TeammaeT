import React, {useContext, useEffect} from 'react';
import {Button, Table} from "react-bootstrap";
import {DareContext} from "./DareContext";


function ReceivedList(props) {
    const [received,sent,methods] = useContext(DareContext);

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
                {received.map((row) =>
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
