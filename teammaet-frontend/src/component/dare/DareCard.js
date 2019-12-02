import React, {useContext, useState} from "react";
import {Button} from "react-bootstrap";
import {UserContext} from "../../context/UserContext";
import {DareContext} from "../../context/DareContext";
import PreCard from "./PreCard";

export default function DareCard({row}) {
    const {user} = useContext(UserContext);
    const {dareMethods} = useContext(DareContext);
    const [cardState, setCardState] = useState(false)
    return (
        <>
            <PreCard row={row} setCardState={setCardState} cardState={cardState}/>
        </>)
};