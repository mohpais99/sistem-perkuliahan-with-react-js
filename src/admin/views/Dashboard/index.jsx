import { Header } from 'admin/components';
import React from 'react';

function Dashboard() {
    const user = "Tommy Purnomo"
    return (
        <>
            <Header
                component={
                    <span className="text-secondary">{user}</span>
                }
                title="Selamat Pagi," />
        </>
    )
}

export default Dashboard
