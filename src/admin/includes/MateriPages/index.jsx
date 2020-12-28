import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Button} from 'react-bootstrap'
import { MateriEntry, CustomModal, InputMateri } from 'admin/molekuls';
import { Firebase } from "config";
// import blog1 from 'assets/img/blog/blog1.jpg';
import './style.css';

function Materi() {
    const [show, setShow] = useState(false);
    const [materi, setMateri] = useState([])
    // const {loading, setLoading} = useState(false)
    const handleModal = () => {
        setShow(!show)
    }


    useEffect(() => {
        getMateri()
    }, [])

    const getMateri = () => {
        var { uid } = JSON.parse(localStorage.getItem('user'))
        var urlref = Firebase.database().ref('files/' + uid);
        return urlref.on('value', (snapshot) => {
            let response = []
            snapshot.forEach((childSnapshot) => {
                var key = childSnapshot.key;
                var data = childSnapshot.val();
                response.push({ id: key, ...data});
            })
            setMateri(response)
        })
    }

    // const getMateri = () => {
    //     const response = []
    //     const { uid } = JSON.parse(localStorage.getItem('user'))
    //     var url = Firebase.database().ref('files/' + uid );
    //     return url.on('value', (snapshot) => {
    //         const data = snapshot.val()
    //         if (data) {
    //             Object.keys(data).map(key => {
    //                 return response.push({
    //                     id: key,
    //                     data: snapshot.val()[key]
    //                 })
    //             })
    //             const sortedMateri = response.sort((a, b) => b.data.date - a.data.date)
    //             setMateri(sortedMateri)
    //         }
    //     });
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
                            materi.length > 0 ? 
                                materi.map((prop, i) => 
                                    <MateriEntry
                                        key={i}
                                        {...prop} />
                                )
                            :
                                <Col className="text-center" sm="12" md="12">Empty Data!</Col>
                        }
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Materi
