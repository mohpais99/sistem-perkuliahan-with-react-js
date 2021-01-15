import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from 'admin/layout/Admin'
import Auth from 'auth/layout/Auth'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route 
                    path="/admpanel"
                    render={
                        props => <Admin {...props} />
                    } />
                <Route 
                    path="/"
                    render={
                        props => <Auth {...props} />
                    } />
            </Switch>
        </Router>
    );
}

export default Routes;