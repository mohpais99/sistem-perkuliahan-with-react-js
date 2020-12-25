import React, { Component } from 'react';
import { Sidebar } from 'admin/components';
import routes from '../Routes'
import './style.css';
import { Route, Switch } from 'react-router-dom';

export class Admin extends Component {
    constructor(props) {
        super(props);
    }
    getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admpanel") {
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
            <div className="wrapper">
                <Sidebar 
                    {...this.props}
                    routes={routes} />
                <div className="content">
                    <Switch>{this.getRoutes(routes)}</Switch>
                </div>
            </div>
        )
    }
}

export default Admin
