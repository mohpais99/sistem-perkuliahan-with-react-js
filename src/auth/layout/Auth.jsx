import React, { Component } from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import routes from '../Routes';
import '../Style.css';

class Auth extends Component {
    getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/auth") {
                return (
                    <Route 
                        key={key}
                        path={prop.layout + prop.path}
                        render={props => 
                            <prop.component {...props} />
                        } />
                );
            } else {
                return null
            }
        });
    }
    
    render() {
        return (
            <div className="wrapper-auth d-flex align-items-center">
                <div className="w-100 bg-custom-g position-absolute" style={{minHeight: "50vh", top: "0"}}></div>
                <Container className="z-2">
                    <Row>
                        <Col className="mx-auto" md="4">
                            <Switch>{this.getRoutes(routes)}</Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Auth
