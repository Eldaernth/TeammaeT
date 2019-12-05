import React, {useContext} from "react";
import {DareContext} from "../../context/DareContext";
import PreCard from "./PreCard";

export default function Dares(props) {
    const {receivedDares, sentDares} = useContext(DareContext);

    return (
        <div className="Cards">
            {props.isReceived ?
                receivedDares.map((row) =>
                    <PreCard row={row}/>
                ) : (
                    sentDares.map((row) =>
                        <PreCard row={row}/>
                    ))}
        </div>
    )

}