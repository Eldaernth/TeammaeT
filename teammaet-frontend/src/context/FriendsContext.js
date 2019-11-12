import React, {createContext, useState} from "react";
import Axios from "axios";

export const FriendsContext = createContext();

export function FriendsProvider(props) {
    const [friends, setFriends] = useState([]);
    let [friendIds,serFriendIds]= useState([]);
    const methods = {
        getFriends: (id) => {
            Axios.get(`http://localhost:8080/user/${id}/friend`)
                .then((ret) => {
                    setFriends(ret.data);
                });
        },
        addFriend: (evt, name,id) => {
            console.log(name);
            evt.preventDefault();
            Axios.post(`http://localhost:8080/user/${id}/friend/add/${name}`)
                .then((ret) => {
                    console.log(ret.data)
                });
        },
        deleteFriend: (evt,id) => {
            evt.preventDefault();
            Axios.delete(`http://localhost:8080/user/${id}/friend/del/${evt.target.value}`)
                .then((ret) => {
                    console.log(ret.data)
                });
        },
        addFriendId:(id)=>friendIds.push(id)
    };
    return (
        <FriendsContext.Provider value={[friends, methods,friendIds]}>
            {props.children}
        </FriendsContext.Provider>
    )
}