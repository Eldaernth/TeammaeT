import React, {createContext, useState} from "react";
import Axios from "axios";

export const UserContext = createContext();

export function UserProvider(props) {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const methods = {
        getUsers: () => {
            console.log(localStorage.getItem("token"));
            Axios.get('http://localhost:8080/user', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    setUsers(ret.data);
                });
        },
        getUser: (id) => {
            Axios.get(`http://localhost:8080/user/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    setUser(ret.data);
                });
        }
    };

    return (
        <UserContext.Provider value={[users, user, methods]}>
            {props.children}
        </UserContext.Provider>
    )
}