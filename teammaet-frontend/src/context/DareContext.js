import React, {createContext, useState} from "react";
import Axios from "axios";

export const DareContext = createContext();

export function DareProvider(props) {
    const [dare, setDare] = useState({});
    const [sentDares, setSentDares] = useState([]);
    const [receivedDares, setReceivedDares] = useState([]);
    const [url, setUrl] = useState([]);
    const [dareDependency, setDareDependency] = useState(false);
    const [isExist, setIsExist] = useState(true);
    const dareMethods = {
        getDare: (userId, id) => {
            Axios.get(`http://localhost:8080/user/${userId}/dare/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => setDare(res.data))
        },
        getReceivedDares: (id) => {
            Axios.get(`http://localhost:8080/user/${id}/dare/received`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    setReceivedDares(ret.data);
                    setIsExist(true);
                })
                .catch(error => {
                    console.log(error.response.data)
                });
        },
        getSentDares: (id) => {
            Axios.get(`http://localhost:8080/user/${id}/dare/sent`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    setSentDares(ret.data);
                    setIsExist(true);
                })
                .catch(error => {
                    console.log(error.response.data)
                });
        },

        deleteDare: (evt, userId, id) => {
            evt.preventDefault();
            Axios.delete(`http://localhost:8080/user/${userId}/dare/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((ret) => {
                    dareDependency ? setDareDependency(false) : setDareDependency(true);
                    setIsExist(false);
                    console.log(ret.data)
                })
                .catch(error => {
                    console.log(error.response)
                });
        },
        addDare: (id, dare, friendIds) => {
            Axios.post(`http://localhost:8080/user/${id}/dare`, {
                userThatSends: id,
                title: dare.title,
                dare: dare.dare,
                bet: dare.bet,
                deadline: dare.deadline,
                friendList: friendIds
            }, {
                headers: {
                    "Content-type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    'Accept': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res => {
                dareDependency ? setDareDependency(false) : setDareDependency(true);
                console.log(res.data)
            })
                .catch(error => {
                    console.log(error.response)
                });
        },
        getVideos: (userId, id) => {
            Axios.get(`http://localhost:8080/user/${userId}/dare/${id}/videos`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => setUrl(res.data))
        },
        onUpload: (e, userId, id) => {
            const fd = new FormData();
            fd.append("video", e.target.files[0]);
            Axios.post(`http://localhost:8080/user/${userId}/dare/${id}/uploadVideoFile`,
                fd, {
                    headers: {
                        "Content-type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",
                        'Accept': 'application/json',
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                }).then(res => {
                dareDependency ? setDareDependency(false) : setDareDependency(true);
                console.log(res.data)
            })
        }
    };
    return (
        <DareContext.Provider value={{receivedDares, sentDares, dareMethods, dare, dareDependency, url, isExist}}>
            {props.children}
        </DareContext.Provider>
    );
}