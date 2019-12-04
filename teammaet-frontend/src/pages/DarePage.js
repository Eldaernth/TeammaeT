import React, {useContext, useEffect, useState} from "react";
import {DareContext} from "../context/DareContext";
import {useParams} from 'react-router-dom'
import Axios from "axios";

export default function DarePage() {
    const {dareMethods, dare} = useContext(DareContext);
    const {userId, id} = useParams();
    const [url, setUrl] = useState([]);
    useEffect(() => {
        dareMethods.getDare(userId, id);
        Axios.get(`http://localhost:8080/user/${userId}/dare/${id}/videos`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => setUrl(res.data))
    }, []);

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


    console.log(url);
    return (
        <div>
            <h1>{dare.title}</h1>
            <input type="file" accept="video/mp4,video/x-m4v,video/*" onChange={onUpload}/>
            {url.map((row) =>
                <video width="320" height="240" controls>
                    <source src={`/Videos/${row.videoPath}`} type="video/mp4"/>
                    Your browser does not support
                </video>
            )}
        </div>
    )
}