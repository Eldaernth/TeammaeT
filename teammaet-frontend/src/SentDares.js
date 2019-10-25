import React,{useState} from 'react';
import Axios from 'axios';

function SentDares(props) {
    const[dares,setDares] = useState([{
        id:0,
        title:"asd",
        dare:"afw",
        bet:"afsfas"
    }]);
    const id = props.match.params.userId;
    Axios.get(`http://localhost:8080/user/${id}/dare/recieved`)
        .then((ret) => {
            setDares(ret.data);
        })
    
    return (
        <div>
            {dares.map((row) => 
                <div key={row.id}> {row.dare}</div>
                )}
        </div>
    )
}

export default SentDares
