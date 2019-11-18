import React from "react";
import {Button, Form} from "react-bootstrap";

export default function ActionButtons({methods, user, row, isDare}) {
    return (
        <>
            {isDare ? (
                    <td>
                        <Form.Check aria-label="option 1" onChange={() => methods.addFriendId(row.id)}/>
                    </td>
                ) :
                (
                    <td align={"right"}>
                        <Button value={row.id} variant={"outline-danger"}
                                onClick={(e) => methods.deleteFriend(e, user.id)}>X</Button>
                    </td>
                )
            }
        </>
    )

}