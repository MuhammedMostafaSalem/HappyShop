import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../UserAddressCard/UserAddressCard.css'
import deleteicon from '../../../images/delete.png'
import add from '../../../images/add.png'

const UserAddressCard = () => {
    return (
        <div className="user-address-card my-2 py-2 px-4">
            <Row className="d-flex justify-content-between">
                <Col sm="1">
                    <div className="p-2 fw-bold">المنزل</div>
                </Col>
                <Col sm="4" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <div className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-1"
                                src={add}
                                height="25px"
                                width="20px"
                            />
                            <Link to="/user/edit-address" className='text-decoration-none'>
                                <p className="item-delete-edit"> تعديل</p>
                            </Link>
                        </div>
                        <div className="d-flex ">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> ازاله</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12">
                    <div className='titleAdress'>
                        القاهرة مدينه نصر شارع التسعين عماره ١٤
                    </div>
                </Col>
            </Row>
            <Row className="mt-1">
                <Col sm="12" className="d-flex">
                    <div className='titleAdress mt-1'>رقم الهاتف:</div>
                    <div className="mx-2 item-delete-edit">0021313432423</div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddressCard