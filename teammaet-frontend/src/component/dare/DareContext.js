import React, {createContext,useState} from "react";
import Axios from "axios";

export const DareContext = createContext();

export function DareProvider(props) {
    const [sentDares,setSentDares] = useState([]);
    const [receivedDares,setReceivedDares] = useState([]);
    const methods = {
        getReceivedDares:() => {Axios.get(`http://localhost:8080/user/${props.id}/dare/type/received`)
            .then((ret) => {
                setReceivedDares(ret.data);
            })
        },
        getSentDares:() => {Axios.get(`http://localhost:8080/user/${props.id}/dare/type/sent`)
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
        <DareContext.Provider value={[receivedDares,sentDares,methods]}>
            {props.children}
        </DareContext.Provider>
    );
}