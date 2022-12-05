import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../UserAllAddress/UserAllAddress.css'
import UserAddressCard from './../UserAddressCard/UserAddressCard';

const UserAllAddress = () => {
    return (
        <div>
            <div className='admin-content-text'>دفتر العناوين</div>
            <Row className='justify-content-start'>
                <UserAddressCard/>
                <UserAddressCard/>
            </Row>
            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" className='text-decoration-none'>
                        <button className="btn btn-dark">اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllAddress