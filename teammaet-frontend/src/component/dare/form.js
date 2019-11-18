import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

export default function DareForm({shown}) {
    const [dare, setDare] = useState({
        title: "",
        dare: "",
        bet: "",
        deadline: "",
        Shown: true
    });

    function handleClick(event) {
        shown(dare);
    }

    return (
        <Form>
            <Form.Group controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" value={dare.title} onChange={e => {
                    e.persist();
                    setDare(prev => ({...prev, title: e.target.value}))
                }}/>
            </Form.Group>

            <Form.Group controlId="Message">
                <Form.Label>Massage</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Massage" value={dare.dare} onChange={e => {
                    e.persist();
                    setDare(prev => ({...prev, dare: e.target.value}))
                }}/>
            </Form.Group>

            <Form.Group controlId="Bet">
                <Form.Label>Bet</Form.Label>
                <Form.Control type="text" placeholder="Bet" value={dare.bet} onChange={e => {
                    e.persist();
                    setDare(prev => ({...prev, bet: e.target.value}))
                }}/>
            </Form.Group>

            <Form.Group controlId="Deadlne">
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="date" placeholder="Deadline" value={dare.deadline} onChange={e => {
                    e.persist();
                    setDare(prev => ({...prev, deadline: e.target.value}))
                }}/>
            </Form.Group>

            <Button onClick={handleClick}>Next</Button>
        </Form>
    )

}