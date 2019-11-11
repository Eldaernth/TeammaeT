import React, {useContext, useEffect} from 'react';
import {Button, Table} from "react-bootstrap";
import {DareContext} from "../../context/DareContext";
import {UserContext} from "../../context/UserContext";


function ReceivedList(props) {
    const [received, sent, methods] = useContext(DareContext);
    const [users,user,userMethods] = useContext(UserContext);


    useEffect(() => {
        methods.getReceivedDares(user.id);
    }, [methods]);

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
                        <td> {row.title}</td>
                        <td> {row.dare}</td>
                        <td><Button value={row.id} variant="outline-danger" onClick={(e)=>methods.deleteDare(e,user.id)}>X</Button></td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default ReceivedList
