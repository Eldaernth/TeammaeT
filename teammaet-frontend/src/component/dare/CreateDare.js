import React,{useState}from 'react';
import FriendList from "../friendlist/FriendList";
import DareForm from "./form";
import Axios from "axios";
import {Button} from "react-bootstrap";

export default function CreateDare(props) {
    const [dare,setDare] = useState({
        Dare:{
            title: "",
            dare:"",
            bet:"",
            deadline: ""
        }
    });
    const [isShown,setIsShown] = useState(false);
    function handleDareClick(shown) {
        setIsShown(shown.Shown);
        console.log(shown.title);
        setDare(prevState => ({
            Dare:{
                ...prevState.Dare,
                title:shown.title,
                dare:shown.dare,
                bet:shown.bet,
                deadline:shown.deadline
            }
            }));
        console.log(dare);
    }
    function handleFriendClick(friendId){
        Axios.post(`http://localhost:8080/user/${props.id}/dare`,{
            dare
        },{
            headers:{
                "Content-type":"application/json",
                "Access-Control-Allow-Origin":"http://localhost:3000",
                'Accept': 'application/json'
        }}).then(res => console.log(res.data))
    }
    return(
        <div>
            {
                isShown ? (
                    <FriendList id={props.id} isDare={true} friendList={handleFriendClick}/>
                    ):(
                    <DareForm shown={handleDareClick}/>
                )
            }
        </div>
    )

}