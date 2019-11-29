import React from 'react'
import {Table} from 'react-bootstrap';
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import BottomButtons from "./BottomButtons";
import FriendRequest from "./FriendRequest";

export default function FriendList(props) {
    return (
        <div>
            {props.isDare ?
                <h2>Select friends:</h2> :
                <AddFriend/>}

            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    <FriendRequest/>
                    <Friend isDare={props.isDare}/>
                </tbody>

            </Table>
            <BottomButtons friendList={props.friendList} isDare={props.isDare}/>
        </div>
    )
}
