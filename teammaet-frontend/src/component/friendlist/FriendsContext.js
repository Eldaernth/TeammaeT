import React, {createContext,useState} from "react";
import Axios from "axios";

export const FriendsContext = createContext();

export function FriendsProvider(props) {
    const [friends,setFriends] = useState([]);
    const methods ={
        getFriends:()=>{
            Axios.get(`http://localhost:8080/user/${props.id}/friend`)
                .then((ret) => {
                    setFriends(ret.data);
                });
        },
        addFriend: (evt,name) =>{
                console.log(name);
                evt.preventDefault();
                Axios.post(`http://localhost:8080/user/${props.id}/friend/add/${name}`)
                    .then((ret) => {
                        console.log(ret.data)
                    });
        },
        deleteFriend:(evt) => {
            evt.preventDefault();
            Axios.delete(`http://localhost:8080/user/${props.id}/friend/del/${evt.target.value}`)
                .then((ret) => {
                    console.log(ret.data)
                });
        }
    };
    return(
        <FriendsContext.Provider value={[friends,methods]}>
            {props.children}
        </FriendsContext.Provider>
    )
}