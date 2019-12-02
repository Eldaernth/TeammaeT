import React, {createContext, useState} from "react";
import Axios from "axios";

export const UserContext = createContext();

export function UserProvider(props) {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    let [blob,setBlob] = useState("");
    const userMethods = {
        getUsers: () => {
            console.log(localStorage.getItem("token"));
            Axios.get('http://localhost:8080/user', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    setUsers(ret.data);
                })
                .catch(error => {
                    console.log(error.response);
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
                })
                .catch(error => {
                    console.log(error.response)
                });
        },
        getAvatar: (id) => {
            Axios.get(`http://localhost:8080/user/${id}/avatar`, {
                responseType:"arraybuffer",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(response => {
                    let arrayBufferView = new Uint8Array( response.data );
                    let blob = new Blob( [ arrayBufferView ], { type: "image/png" } );
                    let urlCreator = window.URL || window.webkitURL;
                    setBlob( urlCreator.createObjectURL( blob ));
                })
                .catch(ex => {
                    console.error(ex);
                });
        }
    };

    return (
        <UserContext.Provider value={{users, user, userMethods,blob}}>
            {props.children}
        </UserContext.Provider>
    )
}