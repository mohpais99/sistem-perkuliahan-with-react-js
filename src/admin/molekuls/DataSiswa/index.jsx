import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function CustomInput(props) {
    return (
        <>
            <Container fluid>
                <Row className="font-14">
                    <Col className="my-2" sm="12" md="12">
                        <Row>
                            <Col>
                                <span >Nama Lengkap</span>
                            </Col>
                            <Col className="text-right">
                                <span className="text-secondary">{props.fullname}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="my-2" sm="12" md="12">
                        <Row>
                            <Col>
                                <span >Nomor Induk</span>
                            </Col>
                            <Col className="text-right">
                                <span className="text-secondary">{props.nim}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="my-2" sm="12" md="12">
                        <Row>
                            <Col>
                                <span >Tempat, Tanggal Lahir</span>
                            </Col>
                            <Col className="text-right">
                                <span className="text-secondary">{props.pod}, {props.bod}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="my-2" sm="12" md="12">
                        <Row>
                            <Col>
                                <span >Jenis Kelamin</span>
                            </Col>
                            <Col className="text-right">
                                <span className="text-secondary">{props.sex}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="my-2" sm="12" md="12">
                        <Row>
                            <Col>
                                <span >Agama</span>
                            </Col>
                            <Col className="text-right">
                                <span className="text-secondary">{props.agama}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="my-2" sm="12" md="12">
                        <Row>
                            <Col>
                                <span >Pendidikan</span>
                            </Col>
                            <Col className="text-right">
                                <span className="text-secondary">{props.education}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="my-2" sm="12" md="12">
                        <Row>
                            <Col>
                                <span >Alamat Peserta Didik</span>
                            </Col>
                            <Col className="text-right">
                                <span className="text-secondary">{props.address}</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CustomInput
