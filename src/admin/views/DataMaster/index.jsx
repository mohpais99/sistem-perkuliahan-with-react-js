import React, { useState } from 'react'
import { Header } from 'admin/components';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import './style.css';
import { MateriPages, VideoPages } from 'admin/includes';

function Master() {
    const [key, setKey] = useState('materi');
    return (
        <>
            <Header title="File" />
            <Container className="master-container" fluid>
                <Row className="p-4">
                    <Col>
                        <Tabs 
                            activeKey={key}
                            onSelect={(k) => setKey(k)}>
                                <Tab eventKey="materi" title="Materi">
                                    <MateriPages />
                                </Tab>
                                <Tab eventKey="video" title="Video">
                                    <VideoPages />
                                </Tab>
                                <Tab eventKey="soal" title="Soal">
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

export default Master
