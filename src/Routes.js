import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Admin from 'admin/layout/Admin'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route 
                    path="/admpanel"
                    render={
                        props => <Admin {...props} />
                    } />
                <Redirect from="/" to="/admpanel" />
            </Switch>
        </Router>
    );
}

export default Routes;