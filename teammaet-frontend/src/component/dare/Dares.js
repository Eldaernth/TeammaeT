import React, {useContext} from "react";
import {DareContext} from "../../context/DareContext";
import DareCard from "./DareCard";

export default function Dares(props) {
    const {receivedDares, sentDares} = useContext(DareContext);

    return (
        <div className="Cards">
            {props.isReceived ?
                receivedDares.map((row) =>
                    <DareCard row={row}/>
                ) : (
                    sentDares.map((row) =>
                        <DareCard row={row}/>
                    ))}
        </div>
    )

}