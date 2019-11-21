import React from "react";
import {Button, Form} from "react-bootstrap";
import useForm from "react-hook-form";

export default function DareForm({shown}) {
    const {register,handleSubmit ,setValue,errors} = useForm();
    const onSubmit=(data) =>{
        console.log(data);
        shown(data);
    };


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" name="title" ref={register({required: true, pattern:/[\w$?^]/})}/>
                {errors.title && errors.title.type === "required" && <p style={{color: "red"}}>This field is required</p>}
                {errors.title && errors.title.type === "pattern" && <p style={{color: "red"}}>Name contains invalid character</p>}
            </Form.Group>

            <Form.Group controlId="Message">
                <Form.Label>Massage</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Massage" name="dare" ref={register({required:true,pattern:/[\w$?^]/})}/>
                {errors.dare && errors.dare.type === "required" && <p style={{color: "red"}}>This field is required</p>}
                {errors.dare && errors.dare.type === "pattern" && <p style={{color: "red"}}>Name contains invalid character</p>}
            </Form.Group>

            <Form.Group controlId="Bet">
                <Form.Label>Bet</Form.Label>
                <Form.Control type="text" placeholder="Bet" name="bet" ref={register({pattern:/[\w$?^]/})}/>
                {errors.bet && errors.bet.type === "pattern" && <p style={{color: "red"}}>Name contains invalid character</p>}
            </Form.Group>

            <Form.Group controlId="Deadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="date" placeholder="Deadline" name="deadline" ref={register({pattern:/[\w$?^]/})}/>
                {errors.username && errors.username.type === "pattern" && <p style={{color: "red"}}>Name contains invalid character</p>}
            </Form.Group>
            <Form.Group controlId="Shown">
                <Form.Control type="hidden" name="Shown" ref={register}/>
            </Form.Group>
            <Button type="submit" onClick={() => setValue("Shown",true)}>Next</Button>
        </Form>
    )

}