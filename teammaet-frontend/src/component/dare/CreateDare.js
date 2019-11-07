import React,{useState}from 'react';
import FriendList from "../friendlist/FriendList";
import DareForm from "./form";
import {Button} from "react-bootstrap";

export default function CreateDare(props) {
    const [isShown,setIsShown] = useState(false);
    return(
        <div>
            {
                isShown ? (
                    <FriendList id={props.id}/>
                    ):(
                    <DareForm/>
                )
            }
            <Button onClick={()=>{console.log(isShown);
                            setIsShown(true);}
            }
            >Next</Button>
        </div>
    )

}