import React, {useState} from 'react';
import Axios from 'axios';
import {Button, Table} from "react-bootstrap";


function ReceivedList(props) {
    const [dares, setDares] = useState([]);
    Axios.get(`http://localhost:8080/user/${props.id}/dare/type/received`)
        .then((ret) => {
            setDares(ret.data);
        });


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
                        <td><Button>Delete</Button></td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default ReceivedList
