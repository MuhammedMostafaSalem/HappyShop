import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from './../../components/User/UserSideBar/UserSideBar';
import UserAddAddress from './../../components/User/UserAddAddress/UserAddAddress';

const UserAddAddressPage = () => {
    return (
        <Container style={{minHeight:'505px'}}>
            <Row className='py-3'>
                <Col lg="2" md='3' sm='4'>
                    <UserSideBar/>
                </Col>
                <Col lg='10' md='9' sm='8'>
                    <UserAddAddress/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserAddAddressPage