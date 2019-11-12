import React from "react";
import {Button} from "react-bootstrap";

export default function BottomButtons(props) {
    return(
        <>
        {props.isDare ? (
                <Button onClick={props.friendList}>Submit</Button>
            ) : (
                ""
            )}
            </>
    );

}