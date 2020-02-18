import React, {createContext, useState} from "react";
import Axios from "axios";

export const UserContext = createContext();

export function UserProvider(props) {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const [userBlob, setUserBlob] = useState("");
    const [blobDependency, setBlobDependency] = useState(false);
    const userMethods = {
        getUsers: () => {
            Axios.get('http://localhost:8080/user')
                .then((ret) => {
                    setUsers(ret.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        },
        getUser: (id) => {
            Axios.get(`http://localhost:8080/user/${id}`)
                .then((ret) => {
                    setUser(ret.data);
                })
                .catch(error => {
                    console.log(error.response)
                });
        },
        getAvatar: (id) => {
            Axios.get(`http://localhost:8080/user/${id}/avatar`, {
                responseType: "arraybuffer",
            })
                .then(response => {
                    let arrayBufferView = new Uint8Array(response.data);
                    let blob = new Blob([arrayBufferView], {type: "image/png"});
                    let urlCreator = window.URL || window.webkitURL;
                    setUserBlob(urlCreator.createObjectURL(blob));
                })
                .catch(ex => {
                    console.error(ex);
                });
        },
        onUpload: (e) => {
            const fd = new FormData();
            fd.append("avatar", e.target.files[0]);
            console.log(fd);
            Axios.post(`http://localhost:8080/user/${user.id}/uploadFile`,
                fd, {
                    headers: {
                        "Content-type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",
                        'Accept': 'application/json'
                    }
                }).then(res => {
                blobDependency ? setBlobDependency(false) : setBlobDependency(true);
                console.log(res.data)
            })
        }
    };

    return (
        <UserContext.Provider value={{users, user, userMethods, userBlob, setUserBlob, blobDependency}}>
            {props.children}
        </UserContext.Provider>
    )
}