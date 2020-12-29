import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Button, Spinner} from 'react-bootstrap'
import { MateriEntry, InputMateri } from 'admin/molekuls';
import { Firebase } from "config";
import { useDispatch } from 'react-redux';
import './style.css';

function Materi() {
    const [materi, setMateri] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {
        const { uid } = JSON.parse(localStorage.getItem('user'))
        const unsubscribe = Firebase.database().ref('files/' + uid)
            .on('value', 
                (snapshot) => {
                    let response = []
                    if (snapshot) {
                        snapshot.forEach((childSnapshot) => {
                            var key = childSnapshot.key;
                            var data = childSnapshot.val();
                            response.push({ id: key, ...data});
                            setLoading(false)
                        })
                        var sortedMateri = response.sort((a, b) => b.date - a.date)
                        setMateri(sortedMateri)
                    } 
                },
                (err) => {
                    console.log(err);
                }
            )
        return () => unsubscribe()
    }, [])
    
    const dispatch = useDispatch()
    const handleModal = () => {
        const payload = {
            id: 'materi-modal',
            title: 'Unggah Materi Baru',
            component: <InputMateri />,
            show: true,
        }
        dispatch({type: "MODAL_SHOW", payload: payload})
    }

    const getContent = data => {
        const filteredElements = data.filter(e => e.title.toLowerCase().includes(search))
        if (filteredElements.length > 0 && !loading) {
            return (
                filteredElements.map((prop, i) => 
                    <MateriEntry
                        key={i}
                        {...prop} />
                )
            )
        } else if (filteredElements.length === 0 && !loading) {
            return (
                <Col className="text-center" sm="12" md="12">Empty Data!</Col>
            )
        } else if (loading) {
            return (
                <Col className="text-center">
                    <Spinner className="mr-1" animation="grow" variant="success" />
                    <Spinner className="mr-1" animation="grow" variant="success" />
                    <Spinner animation="grow" variant="success" />
                </Col>
            )
        } 
    }
    return (
        <>
            <Row>
                <Col className="tab-content px-4">
                    <Row className="mt-4 my-2">
                        <div className="col">
                            <Button onClick={handleModal} size="sm" className="text-white" variant="warning">
                                <FontAwesomeIcon className="mr-2" icon={["fa", "plus"]} />
                                Unggah Materi
                            </Button>
                        </div>
                        <div className="col-auto">
                            <div className="search p-1">
                                {/* <button onClick={doSearch} type="submit" className="search-button">
                                    <FontAwesomeIcon icon={["fa", "search"]} />
                                </button> */}
                                <input type="text" className="search-input" onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="search ..."/>
                            </div>
                        </div>
                    </Row>
                    <Row className="mt-4 my-2">
                        {
                            getContent(materi)
                        }
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Materi
