import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../UserAddAddress/UserAddAddress.css'

const UserAddAddress = () => {
    return (
        <div>
            <div className='admin-content-text'>اضافة عنوان جديد</div>
            <Row className='justify-content-start'>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="تسمية العنوان مثلا(المنزل-العمل)"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="العنوان بالتفصيل"
                    />
                    <input
                        type="text"
                        className="input-form d-block mt-2 px-3"
                        placeholder="رقم الهاتف"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end">
                    <button className="btn btn-dark mt-2 ">اضافة عنوان</button>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddAddress