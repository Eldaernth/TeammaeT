import React from 'react';
import {Table} from "react-bootstrap";
import Dares from "./Dares";

function DareList(props) {

    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Massage</th>
                </tr>
                </thead>
                    <Dares isReceived={props.isReceived}/>
            </Table>
        </div>
    )
}

export default DareList
