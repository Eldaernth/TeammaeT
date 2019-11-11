import React, {createContext, useState} from "react";
import Axios from "axios";

export const DareContext = createContext();

export function DareProvider(props) {
    const [sentDares, setSentDares] = useState([]);
    const [receivedDares, setReceivedDares] = useState([]);
    const methods = {
        getReceivedDares: (id) => {
            Axios.get(`http://localhost:8080/user/${id}/dare/type/received`)
                .then((ret) => {
                    setReceivedDares(ret.data);
                })
        },
        getSentDares: (id) => {
            Axios.get(`http://localhost:8080/user/${id}/dare/type/sent`)
                .then((ret) => {
                    setSentDares(ret.data);
                })
        },
        deleteDare: (evt,id) => {
            evt.preventDefault();
            Axios.delete(`http://localhost:8080/user/${id}/dare/${evt.target.value}`)
                .then((ret) => {
                    console.log(ret.data)
                });
        },
        addDare:(id,dare,friendIds)=>{
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
            }).then(res => console.log(res.data))
        }
    };

    return (
        <DareContext.Provider value={[receivedDares, sentDares, methods]}>
            {props.children}
        </DareContext.Provider>
    );
}