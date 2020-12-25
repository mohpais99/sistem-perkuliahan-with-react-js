import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import blog1 from 'assets/img/blog/blog1.jpg';
import './style.css'

function Materi() {
    return (
        <Row>
            <Col className="tab-content px-4">
                <Row className="mt-4 my-2">
                    <div className="col">
                        <Button size="sm" className="text-white" variant="warning">
                            <FontAwesomeIcon className="mr-2" icon={["fa", "plus"]} />
                            Unggah Materi
                        </Button>
                    </div>
                    <div className="col-auto">
                        <div className="search p-1">
                            <button type="submit" className="search-button">
                                <FontAwesomeIcon icon={["fa", "search"]} />
                            </button>
                            <input type="text" className="search-input" placeholder="search ..."/>
                        </div>
                    </div>
                </Row>
                <Row className="mt-4 my-2">
                    <Col sm="6" md="4">
                        <Card className="shadow">
                            <Card.Img variant="top" src={blog1} />
                            <Card.Body>
                                <h6 className="font-weight-600 mb-0">Teknik Mesin 1</h6>
                                <span className="font-12 text-secondary">13 Desember 2020</span>
                            </Card.Body>
                            <Card.Footer className="bg-white">
                                <Row>
                                    <Col>
                                        <Button variant="outline-warning">Go somewhere</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col sm="6" md="4">
                        <Card className="shadow">
                            <Card.Img variant="top" src={blog1} />
                            <Card.Body>
                                <h6 className="font-weight-600 mb-0">Teknik Mesin 1</h6>
                                <span className="font-12 text-secondary">13 Desember 2020</span>
                            </Card.Body>
                            <Card.Footer className="bg-white">
                                <Row>
                                    <Col>
                                        <Button variant="outline-warning">Go somewhere</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col sm="6" md="4">
                        <Card className="shadow">
                            <Card.Img variant="top" src={blog1} />
                            <Card.Body>
                                <h6 className="font-weight-600 mb-0">Teknik Mesin 1</h6>
                                <span className="font-12 text-secondary">13 Desember 2020</span>
                            </Card.Body>
                            <Card.Footer className="bg-white">
                                <Row>
                                    <Col>
                                        <Button variant="outline-warning">Go somewhere</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Materi
