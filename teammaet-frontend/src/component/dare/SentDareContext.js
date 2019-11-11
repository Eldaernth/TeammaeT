import React, {createContext, useEffect, useState} from "react";
import Axios from "axios";

export const SentDareContext = createContext();

export function SentDareProvider(props) {
    const [sentDares,setSentDares] = useState([]);
    const methods = {
        getReceivedDares:() => {Axios.get(`http://localhost:8080/user/${props.id}/dare/type/received`)
            .then((ret) => {
                setSentDares(ret.data);
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
        <SentDareContext.Provider value={[sentDares,setSentDares,methods]}>
            {props.children}
        </SentDareContext.Provider>
    );
}