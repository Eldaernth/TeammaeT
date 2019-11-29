import React from "react";

export default function PreCard({row,setCardState}) {
    return (
    <div className="card pre-card" onClick={()=>setCardState(true)}>
        <div className="card-top">
            <h2>{row.title}</h2>
            <p>Progress:{row.progress}</p>
        </div>
        <div className="card-footer">
            <p>Deadline:{row.deadline}</p>
        </div>
    </div>
    )
}