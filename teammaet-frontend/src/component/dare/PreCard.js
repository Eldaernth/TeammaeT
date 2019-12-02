import React from "react";
import {Link} from "react-router-dom";

export default function PreCard({row,setCardState}) {
    return (
    <div className="card pre-card" onClick={()=>setCardState(true)}>
        <Link to={`/dares/${row.id}`} className="dare-link">
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