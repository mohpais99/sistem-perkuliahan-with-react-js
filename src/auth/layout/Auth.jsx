import React, { Component } from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import routes from '../Routes'

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
            <div className="wrapper-auth d-flex align-items-center" style={{margin: "0", padding: "0", minHeight: "100vh"}}>
                <Container>
                    <Row>
                        <Col className="mx-auto" md="6">
                            <Switch>{this.getRoutes(routes)}</Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Auth
