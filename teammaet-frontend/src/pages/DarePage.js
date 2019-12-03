import React, {useContext, useEffect} from "react";
import {DareContext} from "../context/DareContext";
import {useParams} from 'react-router-dom'
import Axios from "axios";

export default function DarePage() {
    const {dareMethods,dare} = useContext(DareContext);
    const {userId,id} = useParams();
    useEffect(()=>
        dareMethods.getDare(userId,id),[]);

    const onUpload = (e) => {
        const fd = new FormData();
        fd.append("video", e.target.files[0]);
        console.log(fd);
        Axios.post(`http://localhost:8080/user/${userId}/dare/${id}/uploadVideoFile`,
            fd, {
                headers: {
                    "Content-type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    'Accept': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res => console.log(res.data))
    };

    console.log(dare.user);
    return (
        <div>
            <h1>{dare.title}</h1>
            <input type="file" accept="video/mp4,video/x-m4v,video/*" onChange={onUpload}/>
            {/*<p>{dare.user.name}</p>*/}
        </div>
    )
}