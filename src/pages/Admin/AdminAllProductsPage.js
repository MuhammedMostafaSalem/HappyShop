import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pagination from '../../components/Utility/Pagination/Pagination'
import AdminSideBar from './../../components/Admin/AdminSideBar/AdminSideBar';
import AdminAllProducts from './../../components/Admin/AdminAllProducts/AdminAllProducts';

const AdminAllProductsPage = () => {
    return (
        <Container style={{minHeight:'505px'}}>
            <Row className='py-3'>
                <Col lg="2" md='3' sm='4'>
                    <AdminSideBar/>
                </Col>
                <Col lg='10' md='9' sm='8'>
                    <AdminAllProducts/>
                    <Pagination />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage