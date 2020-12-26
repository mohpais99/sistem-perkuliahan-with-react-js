import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'

function VideoEntry(props) {
    return (
        <Col className="mb-4" sm="6" md="4">
            <Card className="shadow">
                <Card.Body>
                    <h6 className="font-weight-600 mb-0">{props.title}</h6>
                    <span className="font-12 text-secondary">{props.date}</span>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <Row>
                        <Col>
                            <Button size="sm" variant="outline-success" style={{width: "100%"}}>Tonton Video</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default VideoEntry
