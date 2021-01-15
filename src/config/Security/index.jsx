import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as global from 'config/Global';
import { ModalPin } from 'admin/includes';

const GetUser = (token) => {
    const fromStorage = global.tokenValue(token)
    return fromStorage
}

const isValidRole = ({role, allowedRoles}) => allowedRoles.includes(role);

const Authorization = allowedRoles => WrappedComponent => class withAuth extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: localStorage.getItem('user'),
            auth: GetUser(sessionStorage.getItem("token"))
        }
    }
    fetchToken = () => {
        if (!this.state.user && !this.state.auth) {
            return <Redirect from="/admpanel/" to="/auth/sign-in" />
        } else if (this.state.user && !this.state.auth) {
            return <WrappedComponent childComponent={<ModalPin show={true} />} noAuth={true} />
        } else if (this.state.user && this.state.auth) {
            const { role } = this.state.auth;
            const roles = {
                role: role, 
                allowedRoles: allowedRoles
            }
            return isValidRole(roles) ? <WrappedComponent /> : <Redirect from="/admpanel/" to="/auth/sign-in" />
        }
    }
    render() {
        return (
            this.fetchToken()
        )
    }
}

export const AdminRole = Authorization(['admin']);
