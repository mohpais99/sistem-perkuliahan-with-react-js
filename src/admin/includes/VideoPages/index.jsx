import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Button } from 'react-bootstrap';
import { VideoEntry, CustomModal, InputVideo } from 'admin/molekuls';

function VideoPages() {
    const datavideo = require("./video.json")
    const [show, setShow] = useState(false);
    const handleModal = () => {
        setShow(!show)
    }
    return (
        <>
            {
                show && (
                    <CustomModal
                        component={
                            <InputVideo />
                        }
                        title="Unggah Video Baru"
                        show={show} />
                )
                
            }
            <Row>
                <Col className="tab-content px-4">
                    <Row className="mt-4 my-2">
                        <div className="col">
                            <Button onClick={handleModal} size="sm" className="text-white" variant="warning">
                                <FontAwesomeIcon className="mr-2" icon={["fa", "plus"]} />
                                Unggah Video
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
                            datavideo.map((data, id) => 
                                <VideoEntry key={id} {...data} />
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default VideoPages
