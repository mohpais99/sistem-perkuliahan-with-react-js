import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './style.css';

function CustomeModal(props) {
    const [show, setShow] = useState(props.show);
    const handleClose = () => setShow(false);
    return (
        <>
            <Modal
                backdrop="static"
                show={show}
                centered
                onHide={handleClose}
                keyboard={false}>
                    <Modal.Header className="d-block text-center position-relative" closeButton>
                        <b>
                            <span className="font-weight-700">{props.title}</span>
                        </b>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            props.component
                        }
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default CustomeModal
