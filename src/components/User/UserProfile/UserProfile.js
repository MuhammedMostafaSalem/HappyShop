import React from 'react'
import { Col, Row } from 'react-bootstrap'
import deleteicon from '../../../images/delete.png'

const UserProfile = () => {
    return (
        <div>
            <div className='admin-content-text'>الصفحة الشخصية</div>
                <div className="user-address-card my-2 py-2 px-4">
                    <Row className="d-flex justify-content-between">
                        <Col sm="6" className="d-flex">
                            <div className="p-2">الاسم:</div>
                            <div className="p-1 item-delete-edit">محمد</div>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-end">
                            <div className="d-flex mx-2">
                                <img
                                    alt=""
                                    className="ms-1 mt-2"
                                    src={deleteicon}
                                    height="17px"
                                    width="15px"
                                />
                                <p className="item-delete-edit"> تعديل</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" className="d-flex">
                            <div className="p-2">رقم الهاتف:</div>
                            <div className="p-1 item-delete-edit">123558</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" className="d-flex">
                            <div className="p-2">الايميل:</div>
                            <div className="p-1 item-delete-edit">marwan@gmail.com</div>
                        </Col>
                    </Row>
                </div>
                <Row className="mt-5 mx-3">
                    <Col lg="6" md="8" sm="10">
                        <div className="admin-content-text">تغير كملة المرور</div>
                        <input
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="ادخل كلمة المرور القديمة"
                        />
                        <input
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="ادخل كلمة المرور الجديده"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" md="8" sm="10" className="d-flex justify-content-end">
                        <button className="btn btn-dark mt-2">حفظ كلمة السر</button>
                    </Col>
                </Row>
        </div>
    )
}

export default UserProfile