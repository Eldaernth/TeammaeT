import React, {useContext, useState} from 'react';
import FriendList from "../friendlist/FriendList";
import DareForm from "./form";
import {UserContext} from "../../context/UserContext";
import {DareContext} from "../../context/DareContext";
import {FriendsContext} from "../../context/FriendsContext";


export default function CreateDare(props) {
    const {user} = useContext(UserContext);
    const {dareMethods} = useContext(DareContext);
    const {friendIds} = useContext(FriendsContext);
    const [dare, setDare] = useState({});
    const [isShown, setIsShown] = useState(false);

    const handleDareClick = (shown) => {
        setIsShown(shown.Shown);
        setDare({
            title: shown.title,
            dare: shown.dare,
            bet: shown.bet,
            deadline: shown.deadline
        });
    };

    const handleFriendClick = () => {
        dareMethods.addDare(user.id, dare, friendIds)
    };

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