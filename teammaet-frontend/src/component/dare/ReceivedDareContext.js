import React, {createContext, useEffect, useState} from "react";
import Axios from "axios";

export const ReceivedDareContext = createContext();

export function DareProvider(props) {
    const [receivedDares,setReceivedDares] = useState({});

    useEffect(()=>{
        Axios.get(`http://localhost:8080/user/${props.id}/dare/type/received`)
            .then((ret) => {
                setReceivedDares(ret.data);
            });
    },[]);




    return(
        <ReceivedDareContext.Provider value={[receivedDares,setReceivedDares]}>
            {props.children}
        </ReceivedDareContext.Provider>
    );
}