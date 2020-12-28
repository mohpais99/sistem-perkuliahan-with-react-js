import React, { useState } from 'react'
import { Button, Form, FormGroup, Card } from 'react-bootstrap';
import { Firebase } from "config";
import { Link, useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        return new Promise ((resolve, reject) => {
            Firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                const data = {
                    uid: response.user.uid,
                    user: response.user.email,
                    status: response.user.isAnonymous,
                    token: response.user._lat
                }
                localStorage.setItem('user', JSON.stringify(data))
                alert('berhasil')
                history.push('/admpanel/dashboard')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode, errorMessage)
            });
        })
    }
    // refreshToken: "AG8BCnc5xE02JReTONHk_pfoSg6OnXTjsoKj9rEhk43-MEK2tPQlgmeSz0FVxERHSLlzi5NR9bbxsyEq3Pw2LbglXya17swT6DjykhzR_3zxc8V6zkN30GVkJm-hjOD0PyWIhwpJoCdoqW97ip0FPK4miqqC1iwXpqbo4cOM64EEQrm2goXaj9iJZ0J0gOcLfz4mvYtSG9SeFif8GN7MOGURW8vZrhRR_xNkKtRCJT4zclSclgPuTEI"

    return (
        <Card>
            <Card.Header className="text-center">
                <Card.Title>Login User</Card.Title>
                <Card.Subtitle>Authentication Login System</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
            <Card.Footer>
                <Link to="register">Don't Have account ?</Link>
            </Card.Footer>
        </Card>
    )
}

export default Login
