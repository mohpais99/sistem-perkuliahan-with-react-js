import React, { useState } from 'react'
import { Header } from 'admin/components';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import './style.css';
import { Materi } from 'admin/pages';

function Master() {
    const [key, setKey] = useState('materi');
    return (
        <>
            <Header title="File" />
            <Container className="master-container" fluid>
                <Row className="p-4">
                    <Col style={{border: "1px solid"}}>
                        <Tabs 
                            activeKey={key}
                            onSelect={(k) => setKey(k)}>
                                <Tab eventKey="materi" title="Materi">
                                    <Materi />
                                </Tab>
                                <Tab eventKey="Video" title="Video">
                                    <div className="tab-content mt-4 px-3">
                                        <p>Data Video: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod magni earum laboriosam aliquam ullam, eos nesciunt ducimus itaque sapiente, animi, eum nihil vel amet cupiditate quidem cumque qui dignissimos?</p>
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
