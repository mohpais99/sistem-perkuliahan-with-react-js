import React, { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { Header } from 'admin/components';

function Pengaturan() {
    const [key, setKey] = useState('profile');
    return (
        <>
            <Header title="Pengaturan" />
            <Container className="master-container" fluid>
                <Row className="p-4">
                    <Col>
                        <Tabs 
                            activeKey={key}
                            onSelect={(k) => setKey(k)}>
                                <Tab eventKey="profile" title="Data Diri">
                                    <div className="tab-content mt-4 px-3 text-center">
                                        <h1>No Entry</h1>
                                    </div>
                                </Tab>
                                <Tab eventKey="password" title="Kata Sandi">
                                    <div className="tab-content mt-4 px-3 text-center">
                                        <h1>No Entry</h1>
                                    </div>
                                </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Pengaturan
