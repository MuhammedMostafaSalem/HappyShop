import React from 'react'
import { Row } from 'react-bootstrap'
import '../UserAllOrder/UserAllOrder.css'
import UserAllOrderItem from './../UserAllOrderItem/UserAllOrderItem';

const UserAllOrder = () => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
                <UserAllOrderItem/>
                <UserAllOrderItem/>
            </Row>
        </div>
    )
}

export default UserAllOrder