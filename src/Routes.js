import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
                    path="/auth"
                    render={
                        props => <Auth {...props} />
                    } />
                <Redirect from="/" to="/auth" />
            </Switch>
        </Router>
    );
}

export default Routes;