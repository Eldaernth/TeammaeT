import React, {createContext, useState} from "react";
import Axios from "axios";

export const UserContext = createContext();

export function UserProvider(props) {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const methods = {
        getUsers: () => {
            Axios.get('http://localhost:8080/user')
                .then((ret) => {
                    setUsers(ret.data);
                })
                .catch(error => {
                    setUser(error.response.data)
                });
        },
        getUser: (id) => {
            Axios.get(`http://localhost:8080/user/${id}`)
                .then((ret) => {
                    setUser(ret.data);
                })
                .catch(error => {
                    setUser(error.response.data)
                });
        }
    };


    return (
        <UserContext.Provider value={[users, user, methods]}>
            {props.children}
        </UserContext.Provider>
    )
}