import React from 'react'
import '../AdminAllOrders/AdminAllOrders.css'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './../AdminAllOrdersItem/AdminAllOrdersItem';

const AdminAllOrders = () => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
                <AdminAllOrdersItem/>
                <AdminAllOrdersItem/>
            </Row>
        </div>
    )
}

export default AdminAllOrders