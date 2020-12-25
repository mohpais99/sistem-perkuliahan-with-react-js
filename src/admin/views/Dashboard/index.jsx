import { Header } from 'admin/components'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Dashboard() {
    const user = "Tommy Purnomo"
    return (
        <>
            <Header
                component={
                    <span className="text-secondary">{user}</span>
                }
                title="Selamat Pagi," />
            <Container className="my-3" fluid>
                <Row>
                    <Col>
                        <h1>Hei, ini dashboard!</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard
