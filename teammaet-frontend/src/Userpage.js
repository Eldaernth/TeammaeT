import React,{useState} from 'react'
import axios from "axios";

export default function Userpage() {
    const [id,setId] = useState(0);
    const [user,setUser] = useState("");
    
    const handleOnLoad = ()=>{
        let search = window.location.search;
        console.log(search);
        let params = new URLSearchParams(search);
        setId(params.get("id"));
      };
    console.log(id);
    return (
        <div onLoad={()=>handleOnLoad()}>
        </div>
    )
}
