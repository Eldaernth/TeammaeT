import React, {createContext, useState} from "react";
import Axios from "axios";

export const FriendsContext = createContext();

export function FriendsProvider(props) {
    const [friendRequest, setFriendRequest] = useState([]);
    const [friends, setFriends] = useState([]);
    let [friendIds, serFriendIds] = useState([]);
    const friendMethods = {

        acceptFriendRequest: (e, userId, friendId) => {
            e.preventDefault();
            Axios.post(`http://localhost:8080/user/${userId}/friend/accept`,{
                id: friendId
            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    console.log("NEW FRIEND:");
                    console.log(ret);
                })
                .catch(error => {
                    console.log(error.response)
                });
        },

        declineFriendRequest: (e, userId, friendId) => {
            e.preventDefault();
            Axios.post(`http://localhost:8080/user/${userId}/friend/decline`,{
                id: friendId
            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    console.log("NEW FRIEND:");
                    console.log(ret);
                })
                .catch(error => {
                    console.log(error.response)
                });
        },

        getFriendRequestList: (id) => {
            Axios.get(`http://localhost:8080/user/${id}/friend/request`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    setFriendRequest(ret.data);
                })
                .catch(error => {
                    console.log(error.response)
                });
        },

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
            evt.preventDefault();
            Axios.post(`http://localhost:8080/user/${id}/friend/request`,{
                name: name
            },{
                headers: {
                    "Content-type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    'Accept': 'application/json',
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
                    console.log(ret.data);
                })
                .catch(error => {
                    console.log(error.response)
                });
        },
        addFriendId: (id) => friendIds.push(id)
    };
    return (
        <FriendsContext.Provider value={{friends, friendMethods, friendIds, friendRequest}}>
            {props.children}
        </FriendsContext.Provider>
    )
}