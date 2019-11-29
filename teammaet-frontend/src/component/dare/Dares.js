import React, {useContext, useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {DareContext} from "../../context/DareContext";
import DareCard from "./DareCard";

export default function Dares(props) {
    const {receivedDares, sentDares, dareMethods} = useContext(DareContext);

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