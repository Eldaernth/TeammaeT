import React, {createContext, useState} from "react";
import Axios from "axios";

export const FriendsContext = createContext();

export function FriendsProvider(props) {
    const [friends, setFriends] = useState([]);
    let [friendIds, serFriendIds] = useState([]);
    const methods = {
        getFriends: (id) => {
            Axios.get(`http://localhost:8080/user/${id}/friend`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    setFriends(ret.data);
                })
                .catch(error => {
                    console.log(error.response)
                });
        },
        addFriend: (evt, name, id) => {
            console.log(name);
            evt.preventDefault();
            Axios.post(`http://localhost:8080/user/${id}/friend/add/${name}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    console.log(ret.data)
                })
                .catch(error => {
                    console.log(error.response)
                });
        },
        deleteFriend: (evt, id) => {
            evt.preventDefault();
            Axios.delete(`http://localhost:8080/user/${id}/friend/del/${evt.target.value}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    console.log(ret.data)
                })
                .catch(error => {
                    console.log(error.response)
                });
        },
        addFriendId: (id) => friendIds.push(id)
    };
    return (
        <FriendsContext.Provider value={[friends, methods, friendIds]}>
            {props.children}
        </FriendsContext.Provider>
    )
}