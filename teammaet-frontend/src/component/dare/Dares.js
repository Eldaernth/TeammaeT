import React, {useContext, useEffect} from "react";
import {DareContext} from "../../context/DareContext";
import PreCard from "./PreCard";

export default function Dares({id, isReceived}) {
    const {receivedDares, sentDares, dareMethods, dareDependency} = useContext(DareContext);

    useEffect(() => {
        dareMethods.getSentDares(id);
        dareMethods.getReceivedDares(id);
    }, [id, dareDependency]);


    return (
        <div className="Cards">
            {isReceived ?
                receivedDares.map((row) =>
                    <PreCard row={row}/>
                ) : (
                    sentDares.map((row) =>
                        <PreCard row={row}/>
                    ))}
        </div>
    )

}