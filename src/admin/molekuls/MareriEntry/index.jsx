import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as Global from 'config/Global';

function MateriEntry(props) {
    return (
        <Col className="mb-4" sm="6" md="4">
            <Card className="shadow">
                <LazyLoadImage
                    alt="img-card"
                    src={props.cover}
                    style={{height: "250px", objectFit: "cover"}} />
                {/* <Card.Img variant="top" src={props.cover} style={{height: "250px", objectFit: "cover"}} /> */}
                <Card.Body>
                    <h6 className="font-weight-600 mb-0">{props.title}</h6>
                    <span className="font-12 text-secondary">{Global.prettyDate(props.date)}</span>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <Row>
                        <Col>
                            <Button size="sm" variant="outline-warning" style={{width: "100%"}}>Pratinjau</Button>
                        </Col>
                        <Col>
                            <Button size="sm" variant="outline-success" style={{width: "100%"}}>Unduh</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default MateriEntry
