import React, {useContext, useState} from 'react';
import FriendList from "../friendlist/FriendList";
import DareForm from "./form";
import Axios from "axios";
import {UserContext} from "../../context/UserContext";
import {DareContext} from "../../context/DareContext";


export default function CreateDare(props) {
    const [users,user,Usermethods]= useContext(UserContext);
    const [recieved,sent,methods] = useContext(DareContext);
    const [dare, setDare] = useState({
        title: "",
        dare: "",
        bet: "",
        deadline: ""
    });
    const [isShown, setIsShown] = useState(false);
    function handleDareClick(shown) {
        setIsShown(shown.Shown);
        setDare(prevState => ({
            title: shown.title,
            dare: shown.dare,
            bet: shown.bet,
            deadline: shown.deadline
        }));

    }
    function handleFriendClick(friendIds) {
        methods.addDare(user.id,dare,friendIds)
    }

    return (
        <div>
            {
                isShown ? (
                    <FriendList isDare={true} friendList={handleFriendClick}/>
                ) : (
                    <DareForm shown={handleDareClick}/>
                )
            }
        </div>
    )

}