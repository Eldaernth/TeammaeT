import React, {createContext, useEffect, useState} from "react";
import Axios from "axios";

export const ReceivedDareContext = createContext();

export function DareProvider(props) {
    const [receivedDares,setReceivedDares] = useState([]);
    const methods = {
        getReceivedDares:() => {Axios.get(`http://localhost:8080/user/${props.id}/dare/type/received`)
            .then((ret) => {
                setReceivedDares(ret.data);
            })
        },
        deleteDare:(evt) => {
            evt.preventDefault();
            Axios.delete(`http://localhost:8080/user/${props.id}/dare/${evt.target.value}`)
                .then((ret) => {
                    console.log(ret.data)
                });
        }
    };




    return(
        <ReceivedDareContext.Provider value={[receivedDares,setReceivedDares,methods]}>
            {props.children}
        </ReceivedDareContext.Provider>
    );
}