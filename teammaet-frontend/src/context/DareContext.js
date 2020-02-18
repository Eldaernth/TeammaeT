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
    const [owner, setOwner] = useState({});
    const [participants, setParticipants] = useState([]);
    const dareMethods = {
        getDare: (userId, id) => {
            Axios.get(`http://localhost:8080/user/${userId}/dare/${id}`)
                .then((res) => {
                setDare(res.data);
                setOwner(res.data.userFrom);
                setParticipants(res.data.userTo);
            })
        },
        getReceivedDares: (id) => {
            Axios.get(`http://localhost:8080/user/${id}/dare/received`)
                .then((ret) => {
                    setReceivedDares(ret.data);
                    setIsExist(true);
                })
                .catch(error => {
                    console.log(error.response.data)
                });
        },
        getSentDares: (id) => {
            Axios.get(`http://localhost:8080/user/${id}/dare/sent`)
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
            Axios.delete(`http://localhost:8080/user/${userId}/dare/${id}`)
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
                    'Accept': 'application/json'
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
            Axios.get(`http://localhost:8080/user/${userId}/dare/${id}/videos`)
                .then((ret) => {
                for (let re of ret.data) {
                    Axios.get(`http://localhost:8080/user/${re.user.id}/avatar`, {
                        responseType: "arraybuffer",
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        }
                    }).then((res) => {
                        let arrayBufferView = new Uint8Array(res.data);
                        let blob = new Blob([arrayBufferView], {type: "image/png"});
                        let urlCreator = window.URL || window.webkitURL;
                        setUrl((prev) => ([...prev, {
                            id: re.id,
                            videoPath: re.videoPath,
                            videoBlob: urlCreator.createObjectURL(blob),
                            userId: re.user.id,
                            userName: re.user.name,
                            voteCount: 0,
                            vote:"None",
                            upColor:"grey",
                            downColor:"grey"
                        }]));
                    });
                }
            })
        },
        onUpload: (e, userId, id) => {
            const fd = new FormData();
            fd.append("video", e.target.files[0]);
            Axios.post(`http://localhost:8080/user/${userId}/dare/${id}/uploadVideoFile`,
                fd, {
                    headers: {
                        "Content-type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",
                        'Accept': 'application/json'
                    }
                }).then(res => {
                dareDependency ? setDareDependency(false) : setDareDependency(true);
                console.log(res.data)
            })
        },
        postVote: (e, userId, id, vote) => {
            Axios.post(`http://localhost:8080/user/${userId}/dare/${id}/vote`,
                {
                    headers: {
                        "Content-type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",
                        'Accept': 'application/json'
                    }
                }).then(res => {
                dareDependency ? setDareDependency(false) : setDareDependency(true);
                console.log(res.data)
            })
        }
    };
    return (
        <DareContext.Provider value={{
            receivedDares,
            sentDares,
            dareMethods,
            dare,
            dareDependency,
            url,
            setUrl,
            isExist,
            owner,
            participants
        }}>
            {props.children}
        </DareContext.Provider>
    );
}