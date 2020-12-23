import React, { Component } from 'react';
import { Sidebar } from 'admin/components';

export class Admin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="wrapper">
                <Sidebar />
            </div>
        )
    }
}

export default Admin
