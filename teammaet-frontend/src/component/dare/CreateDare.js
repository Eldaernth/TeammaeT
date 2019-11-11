import React, {useState} from 'react';
import FriendList from "../friendlist/FriendList";
import DareForm from "./form";
import Axios from "axios";

export default function CreateDare(props) {
    const [dare, setDare] = useState({
        title: "",
        dare: "",
        bet: "",
        deadline: ""
    });
    const [isShown, setIsShown] = useState(false);

    function handleDareClick(shown) {
        setIsShown(shown.Shown);
        console.log(shown.title);
        setDare(prevState => ({
            title: shown.title,
            dare: shown.dare,
            bet: shown.bet,
            deadline: shown.deadline
        }));

    }

    function handleFriendClick(friendId) {
        console.log(friendId);
        Axios.post(`http://localhost:8080/user/${props.id}/dare`, {
            userThatSends:props.id,
            title: dare.title,
            dare: dare.dare,
            bet: dare.bet,
            deadline: dare.deadline,
            friendList: friendId
        }, {
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Accept': 'application/json'
            }
        }).then(res => console.log(res.data))
    }

    return (
        <div>
            {
                isShown ? (
                    <FriendList id={props.id} isDare={true} friendList={handleFriendClick}/>
                ) : (
                    <DareForm shown={handleDareClick}/>
                )
            }
        </div>
    )

}