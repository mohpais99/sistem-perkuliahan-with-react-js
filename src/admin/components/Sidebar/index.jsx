import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profile from 'assets/img/profile.jpg';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Sidebar() {
    return (
        <div className="position-fixed sidebar shadow">
            <Container>
                <Row >
                    <Col className="header py-4 px-5" md="12">
                        <img src={profile} className="rounded-circle" alt="profile-avatar" width="60"/>
                        <div className="data-profile">
                            <h6 className="font-weight-700 mt-2 mb-0">Tommy Purnomo</h6>
                            <span className="text-secondary small">Guru Teknik Mesin</span>
                        </div>
                    </Col>
                    <Col className="menu p-4" md="12">
                        <ul>
                            <li className="p-3">
                                <Link>
                                    <FontAwesomeIcon className="mr-2" icon={["fa", "home"]} />
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Sidebar;
