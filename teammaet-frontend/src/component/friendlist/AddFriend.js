import React, {useContext, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {FriendsContext} from "../../context/FriendsContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import useForm from "react-hook-form";

export default function AddFriend(props) {

    const {friendMethods} = useContext(FriendsContext);
    const {register, errors} = useForm();
    const [name, setName] = useState("");

    return (
        <Form onSubmit={(e) => friendMethods.addFriend(e, name, props.id)} className={"flex"}>
            <div className="form-group">
                <input value={props.id} type={"text"} hidden/>
                <input id="name" className="input" type="text" name="username" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} required ref={register({required: true, maxLength: 20})}/>
                {errors.username && errors.username.type === "required" &&
                <p style={{color: "red"}}>This field is required</p>}
                {errors.username && errors.username.type === "maxLength" &&
                <p style={{color: "red"}}>Max length is 20 character</p>}
                <label htmlFor="name" className="input-label"><span
                    className="input-text">Add friend</span></label>
            </div>
            <Button type="submit" variant={"outline-primary"} className={"small-button center"}><FontAwesomeIcon size={"2x"} icon={faUserPlus}/></Button>
        </Form>
    )
}