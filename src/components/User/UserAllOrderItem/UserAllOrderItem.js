import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../UserAllOrderItem/UserAllOrderItem.css'
import UserAllOrderCard from './../UserAllOrderCard/UserAllOrderCard';

const UserAllOrderItem = () => {
    return (
        <div className="user-order my-2 p-3 px-5">
            <Row>
                <div className="py-2 order-title">طلب رقم #234556</div>
            </Row>
            <UserAllOrderCard/>
            <UserAllOrderCard/>
            <Row className="d-flex justify-content-between">
                <Col sm="6">
                    <div className='d-flex'>
                        <div>الحالة</div>
                        <div className="mx-2 mt-1 stat">قيد التنفيذ</div>
                    </div>
                </Col>
                <Col sm="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">4000 جنيه</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem