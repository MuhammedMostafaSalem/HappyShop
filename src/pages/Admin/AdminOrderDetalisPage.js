import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from './../../components/Admin/AdminSideBar/AdminSideBar';
import AdminOrderDetalis from './../../components/Admin/AdminOrderDetalis/AdminOrderDetalis';

const AdminOrderDetalisPage = () => {
    return (
        <Container style={{minHeight:'505px'}}>
            <Row className='py-3'>
                <Col lg="2" md='3' sm='4'>
                    <AdminSideBar/>
                </Col>
                <Col lg='10' md='9' sm='8'>
                    <AdminOrderDetalis />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminOrderDetalisPage