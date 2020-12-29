import React, { useState } from 'react';
import { Button, Form, FormGroup, Card, Col } from 'react-bootstrap';
import { Firebase } from "config";
import { Link, useHistory } from 'react-router-dom';
import './style.css';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('yes');
        // return new Promise ((resolve, reject) => {
        //     Firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then((response) => {
        //         const data = {
        //             uid: response.user.uid,
        //             user: response.user.email,
        //             status: response.user.isAnonymous,
        //             token: response.user._lat
        //         }
        //         localStorage.setItem('user', JSON.stringify(data))
        //         alert('berhasil')
        //         history.push('/admpanel/dashboard')
        //     })
        //     .catch((error) => {
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         alert(errorCode, errorMessage)
        //     });
        // })
    }

    return (
        <>
            <Col className="my-2">
                <Card className="radius-10 shadow">
                    <Card.Header className="text-center  bg-transparent border-none">
                        <Card.Title className="font-weight-700 mb-0 mt-2">Masuk ke Akun</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit} className="auth">
                            <FormGroup>
                                <Form.Label className="font-14 font-weight-500">Email</Form.Label>
                                <Form.Control type="email" name="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label className="font-14 font-weight-500">Password</Form.Label>
                                <Form.Control type="password" name="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                            </FormGroup>
                            <Button className="w-100 bg-custom-o text-uppercase" type="submit">
                                Masuk
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="mt-4 text-center">
                <Link to="register">Don't Have account ?</Link>
            </Col>
        </>
    )
}

export default Login
