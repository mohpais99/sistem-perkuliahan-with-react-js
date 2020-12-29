import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './style.css';

function CustomeModal(props) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(props.status);
    const handleClose = () => {
        dispatch({type: "MODAL_CLOSE", payload: null})
        setShow(false)
    };
    return (
        <>
            <Modal
                id={props.id}
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
            </Modal>
        </>
    )
}

export default CustomeModal
