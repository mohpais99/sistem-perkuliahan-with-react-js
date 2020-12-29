import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Firebase } from "config";
import * as Global from 'config/Global'
import './style.css';
import { useDispatch } from 'react-redux';

function InputMateri() {
    const dispatch = useDispatch()
    const hiddenFileInput = useRef(null);
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState({name: null, data:null})
    const [file, setFile] = useState({filename: 'Pilih file...', data: null})
    
    const handleChange = async (event) => {
        const fileUploaded = event.target.files[0];
        setCover({
            name: fileUploaded.name, 
            data: await Global.toBase64(fileUploaded)
        })
    }

    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    const handleFile = (e) => {
        console.log(e.target.files[0]);
        setFile({
            filename: e.target.files[0].name,
            data: URL.createObjectURL(e.target.files[0])
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = JSON.parse(localStorage.getItem('user'))
        const setmateri = new Promise((resolve, reject) => {
            Firebase.database().ref('files/' + user.uid).push({
                cover: cover.data,
                title: title,
                file : file.data,
                date: new Date().getTime()
            });
            resolve(true)
        })
        
        const materi = await setmateri
        if (materi) {
            alert('berhasil')
            dispatch({type: "MODAL_CLOSE", payload: null})
        } else {
            alert('fuck')
            dispatch({type: "MODAL_CLOSE", payload: null})
        }
    }
    const bgImg = {
        backgroundImage: "url(" + cover.data + ")",
        backgroundSize: "cover",
        backfroundPosition: "center center" 
    };
    const color = cover.name ? 'text-white' : ''
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div className="cover d-flex align-items-center mb-3 text-center" style={bgImg}>
                    <input type="file" id="files" className="d-none" onChange={handleChange} ref={hiddenFileInput} />
                    <label forhtml="files" onClick={handleClick} className={`mb-0 ${color}`}>
                        {
                            cover.name ?
                                cover.name
                            :
                                '+ tambah cover'
                        }
                    </label>
                </div>
                <Form.Group controlId="title">
                    <Form.Label>Judul Materi</Form.Label>
                    <Form.Control 
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                <div className="py-4 text-center">
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default InputMateri
