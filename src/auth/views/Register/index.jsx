import React, { useState } from 'react'
import { Button, Card, Form, FormGroup } from 'react-bootstrap';
import { Firebase } from "config";
import { Link } from 'react-router-dom';

function Regiter() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        return new Promise ((resolve, reject) => {
            Firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                alert('berhasil')
                console.log(user);
                setEmail('')
                setPassword('')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode, errorMessage)
            });
        })
    }
    return (
        <Card>
            <Card.Header className="text-center">
                <Card.Title>Register User</Card.Title>
                <Card.Subtitle>Join us with default login</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleRegister}>
                    <FormGroup>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email" 
                            value={email} 
                            placeholder="Enter email" 
                            onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password" 
                            value={password} 
                            placeholder="Enter password" 
                            onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
            <Card.Footer>
                <Link to="login">Have account ?</Link>
            </Card.Footer>
        </Card>
    )
}

export default Regiter
