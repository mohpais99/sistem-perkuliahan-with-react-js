import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Button} from 'react-bootstrap'
import { MateriEntry, CustomModal, InputMateri } from 'admin/molekuls';
import blog1 from 'assets/img/blog/blog1.jpg';
import './style.css';
// import { useDispatch } from 'react-redux';
// import { setModal } from 'redux/action';
// import { useSelector } from 'react-redux';

function Materi() {
    const data_materi = require('./materi.json')
    const [show, setShow] = useState(false);
    const handleModal = () => {
        setShow(!show)
    }
    // const state = useSelector(state => state.Modal)
    // const dispatch = useDispatch()
    // const handleModal = () => {
    //     dispatch(setModal())
    // }
    return (
        <>
            {
                show && (
                    <CustomModal
                        component={
                            <InputMateri />
                        }
                        title="Unggah Materi Baru"
                        show={show} />
                )
                
            }
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
                                <button type="submit" className="search-button">
                                    <FontAwesomeIcon icon={["fa", "search"]} />
                                </button>
                                <input type="text" className="search-input" placeholder="search ..."/>
                            </div>
                        </div>
                    </Row>
                    <Row className="mt-4 my-2">
                        {
                            data_materi.map((data, i) => 
                                <MateriEntry
                                    key={i}
                                    image={blog1}
                                    {...data}
                                />
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Materi
