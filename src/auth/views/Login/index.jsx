import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Card, Col, Spinner, Badge } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './style.css';
import { loginAccess } from 'config/Helpers';

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({status: false, code: '' , message: ''})

    useEffect(() => {
        const { status } = error
        if (status) {
            setTimeout(() => {
                setError({status: false, code: '' , message: ''});
            }, 3000);
        }
    }, [error])

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        loginAccess({email, password})
            .then(res => {
                const data = {
                    uid: res.user.uid,
                    user: res.user.email,
                    status: res.user.isAnonymous,
                    token: res.user._lat
                }
                localStorage.setItem('user', JSON.stringify(data))
                setLoading(false)
                history.push('/admpanel/dashboard')
            })  
            .catch(err => {
                setLoading(false)
                setError({status: true, code: err.code , message: err.message })
            })
    }

    return (
        <>
            <Col className="my-2">
                <Card className="radius-10 shadow">
                    <Card.Header className="text-center bg-transparent border-none">
                        <Card.Title className="font-weight-700 mb-0 mt-2">Masuk ke Akun</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {
                            error.status && (
                                <Badge className="w-100 mb-2 p-3 font-12 d-block" variant="danger" style={{whiteSpace: "normal"}}>{error.message}</Badge>
                            )
                        }
                        <Form onSubmit={handleSubmit} className="auth">
                            <FormGroup>
                                <Form.Label className="font-14 font-weight-500">Email</Form.Label>
                                <Form.Control type="email" name="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label className="font-14 font-weight-500">Password</Form.Label>
                                <Form.Control type="password" name="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                            </FormGroup>
                            <Button 
                                type="submit"
                                disabled={loading || email === '' || password === ''}
                                className="w-100 bg-custom-o">
                                {
                                    loading ? (
                                        <>
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                />
                                            <span className="ml-2">Loading...</span>
                                        </>
                                    ) : (
                                        <span className="text-uppercase">Masuk</span>
                                    )
                                }
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Login
