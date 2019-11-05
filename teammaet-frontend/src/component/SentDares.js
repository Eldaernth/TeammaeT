import React,{useState} from 'react';
import Axios from 'axios';

function SentDares(props) {
    const[dares,setDares] = useState([]);
    
    Axios.get(`http://localhost:8080/user/${props.id}/dare/sent`)
        .then((ret) => {
            setDares(ret.data);
        })
    return (
        <div>
            {dares.map((row) => 
                <div key={row.id}> {row.title}</div>
                )}
        </div>
    )
}

export default SentDares
