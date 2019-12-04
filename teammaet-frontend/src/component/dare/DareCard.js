import React, {useState} from "react";
import PreCard from "./PreCard";

export default function DareCard({row}) {

    const [cardState, setCardState] = useState(false)
    return (
        <>
            <PreCard row={row} setCardState={setCardState} cardState={cardState}/>
        </>)
};