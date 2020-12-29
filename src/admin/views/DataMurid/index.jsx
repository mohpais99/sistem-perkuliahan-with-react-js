import React from 'react'
import { Header } from 'admin/components'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DataSiswa } from 'admin/molekuls';
import './style.css';
import { useDispatch } from 'react-redux';

function Murid() {
    const data_siswa = require('./siswa.json')
    const dispatch = useDispatch()
    const handleModal = (data) => {
        const payload = {
            id: 'siswa-modal',
            title: 'Detail Siswa',
            component: <DataSiswa {...data} />,
            show: true,
        }
        dispatch({type: "MODAL_SHOW", payload: payload})
    }
    return (
        <>
            <Header title="Data Murid" />
            <Container className="data-siswa" fluid>
                <Row className="px-4">
                    <Col sm="12" md="12">
                        <div className="col-4 float-right">
                            <div className="search p-2">
                                <button type="submit" className="search-button">
                                    <FontAwesomeIcon icon={["fa", "search"]} />
                                </button>
                                <input type="text" className="search-input" placeholder="search ..."/>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-5" sm="12" md="12">
                        <Card className="custom-card">
                            <Card.Body>
                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th className="text-center">No.</th>
                                            <th>Nomor Indux</th>
                                            <th>Nama Siswa</th>
                                            <th>Jenis Kelamin</th>
                                            <th>Jurusan</th>
                                            <th className="text-center">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data_siswa.map((data, id) => 
                                                <tr key={id}>
                                                    <td className="text-center">{id+1}</td>
                                                    <td>{data.nim}</td>
                                                    <td>{data.fullname}</td>
                                                    <td>{data.sex}</td>
                                                    <td>{data.jurusan}</td>
                                                    <td className="text-center">
                                                        <Button onClick={() => handleModal(data)} size="sm" variant="outline-success">Detail</Button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Murid
