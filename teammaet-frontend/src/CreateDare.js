import React from 'react';

export default function CreateDare(props) {
    return (
        <Form>
            <Form.Group controlId="Title">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group controlId="Message">
                <Form.Label>Password</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Massage" />
            </Form.Group>

            <Form.Group controlId="Bet">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Bet" />
            </Form.Group>

            <Form.Group controlId="Deadlne">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="date" placeholder="Deadline" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}