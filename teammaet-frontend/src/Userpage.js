import React,{useState} from 'react'
import axios from "axios";

export default function Userpage(props) {
    const [user,setUser] = useState(props.row)
    const id = props.match.params.id

    return (
        <div>
            <span>{id}</span>
        </div>
    )
}
