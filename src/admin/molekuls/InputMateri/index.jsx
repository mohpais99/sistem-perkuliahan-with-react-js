import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import './style.css'

function InputMateri() {
    const [data, setData] = useState({title: ''})
    const [file, setFile] = useState({
        filename: 'Pilih file...',
        data: null
    })
    const handleChange = e => {
        var { name, value } = e.target
        setData({
            [name]: value
        })
    }
    const handleFile = (e) => {
        console.log(e.target.files[0]);
        setFile({
            filename: e.target.files[0].name,
            data: URL.createObjectURL(e.target.files[0])
        })
    }
    return (
        <>
            <Form>
                <Card className="cover mb-3 text-center">
                    <input type="file" id="file" />
                    <label className="mb-0">
                        + Tambah Cover
                    </label>
                </Card>
                <Form.Group controlId="title">
                    <Form.Label>Judul Materi</Form.Label>
                    <Form.Control 
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        placeholder="Masukkan judul..." />
                </Form.Group>
                <Form.Label>File Materi</Form.Label>
                <div className="input-group">
                    <div className="custom-file">
                        <input 
                            type="file"
                            name="file"
                            accept="application/pdf"
                            onChange={handleFile}
                            className="custom-file-input" />
                        <Form.Label className="custom-file-label">{file.filename}</Form.Label>
                    </div>
                </div>
                <Form.Text className="text-muted">
                    *Extensi file hanya berupa format <b>PDF</b>.
                </Form.Text>
            </Form>
        </>
    )
}

export default InputMateri
