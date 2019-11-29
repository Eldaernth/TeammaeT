import React from "react";

export default function PreCard({row}) {
    return <div className="card pre-card">
        <div className="card-top">
            <h2>{row.title}</h2>
            <p>Progress:{row.progress}</p>
        </div>
        <div className="card-footer">
            <p>Deadline:{row.deadline}</p>
        </div>
    </div>
}