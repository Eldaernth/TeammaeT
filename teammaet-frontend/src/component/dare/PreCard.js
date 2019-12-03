import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../context/UserContext";

export default function PreCard({row,setCardState}) {
    const {user} = useContext(UserContext)
    return (
    <div className="card pre-card" onClick={()=>setCardState(true)}>
        <Link to={`${user.id}/dare/${row.id}`} className="dare-link">
        <div className="card-top">
            <h2>{row.title}</h2>
            <p>Progress:{row.progress}</p>
        </div>
        <div className="card-footer">
            <p>Deadline:{row.deadline}</p>
        </div>
        </Link>
    </div>
    )
}