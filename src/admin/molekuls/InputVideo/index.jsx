import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function InputMateri() {
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    return (
        <>
            <Form>
                <Form.Group controlId="title">
                    <Form.Label>Judul Video</Form.Label>
                    <Form.Control 
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Masukkan judul..." />
                </Form.Group>
                <Form.Group controlId="link">
                    <Form.Label>Link Video</Form.Label>
                    <Form.Control 
                        type="text"
                        name="link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="Masukkan link..." />
                </Form.Group>
            </Form>
        </>
    )
}

export default InputMateri
