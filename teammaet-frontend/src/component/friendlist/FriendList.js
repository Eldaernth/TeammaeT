import React from 'react'
import {Table} from 'react-bootstrap';
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import BottomButtons from "./BottomButtons";
import FriendRequest from "./FriendRequest";

export default function FriendList(props) {
    return (
        <div>
            <AddFriend/>
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                    <Friend isDare={props.isDare}/>
            </Table>
            <BottomButtons friendList={props.friendList} isDare={props.isDare}/>
        </div>
    )
}
