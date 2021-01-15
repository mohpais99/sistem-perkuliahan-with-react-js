import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profile from 'assets/img/profile.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoutAccess } from 'config/Helpers';
import './sidebar.css';

function Sidebar(props) {
    const logout = () => {
        logoutAccess()
            .then(res => localStorage.removeItem('user'))
            .catch(err => alert('err'))
    }
    return (
        <div className="position-fixed sidebar shadow">
            <Container >
                <Row className="position-relative">
                    <Col className="header py-4 px-5" md="12">
                        <img src={profile} className="rounded-circle" alt="profile-avatar" width="60"/>
                        <div className="data-profile">
                            <h6 className="font-weight-700 mt-2 mb-0">{props.fullname}</h6>
                            <span className="text-secondary small">{props.role}</span>
                        </div>
                    </Col>
                    <Col className="menu px-4" md="12">
                        <ul>
                            {
                                props.routes.map((prop, key) =>
                                    <li 
                                        key={key} 
                                        className={
                                            `
                                                my-3 py-3 px-4
                                                ${prop.layout+prop.path === props.location.pathname ? 'active' : ''}
                                            `
                                        }>
                                        <Link to={prop.layout+prop.path} className="d-flex">
                                            <div className="mr-3 text-center icon">
                                                {prop.icon}
                                            </div>
                                            <span>{prop.name}</span>
                                        </Link>
                                    </li>
                                )
                            }
                            <li onClick={logout} className="position-absolute py-3 px-4" style={{bottom: "0"}}>
                                <Link to="#" className="d-flex">
                                    <div className="footer p-2 mr-3 text-center text-white icon">
                                        <FontAwesomeIcon icon={["fa", "sign-out-alt"]} />
                                    </div>
                                    <div className="p-2">
                                        <span>Keluar</span>
                                    </div>
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
