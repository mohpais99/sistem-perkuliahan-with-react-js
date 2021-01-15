import React, { Component } from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Login } from "auth/views";
import '../Style.css';

class Auth extends Component {
    render() {
        return (
            <div className="wrapper-auth d-flex align-items-center">
                <div className="w-100 bg-custom-g position-absolute" style={{minHeight: "50vh", top: "0"}}></div>
                <Container className="z-2">
                    <Row>
                        <Col className="mx-auto" md="4">
                            <Login />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Auth
