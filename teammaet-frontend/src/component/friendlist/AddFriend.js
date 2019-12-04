import React, {useContext, useState} from "react";
import {Button, Form, InputGroup, FormControl} from "react-bootstrap";
import {FriendsContext} from "../../context/FriendsContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import useForm from "react-hook-form";

export default function AddFriend(props) {

    const {friendMethods} = useContext(FriendsContext);
    const {register, errors} = useForm();
    const [name, setName] = useState("");

    return (
            <Form onSubmit={(e) => friendMethods.addFriend(e, name, props.id)}>
                    <InputGroup size={"lg"} className="mb-3 float-right" value={name} onChange={(e) => {setName(e.target.value)}}>
                        <FormControl
                            placeholder="Add friend"
                            aria-label="Add friend"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button type="submit" variant="outline-primary"><FontAwesomeIcon icon={faUserPlus}/></Button>
                        </InputGroup.Append>
                    </InputGroup>
            </Form>
    )
}