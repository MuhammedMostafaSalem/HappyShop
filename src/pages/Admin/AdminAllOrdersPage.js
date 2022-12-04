import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from './../../components/Admin/AdminSideBar/AdminSideBar';
import Pagination from './../../components/Utility/Pagination/Pagination';
import AdminAllOrders from './../../components/Admin/AdminAllOrders/AdminAllOrders';

const AdminAllOrdersPage = () => {
    return (
        <Container style={{minHeight:'505px'}}>
            <Row className='py-3'>
                <Col lg="2" md='3' sm='4'>
                    <AdminSideBar/>
                </Col>
                <Col lg='10' md='9' sm='8'>
                    <AdminAllOrders/>
                    <Pagination />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllOrdersPage