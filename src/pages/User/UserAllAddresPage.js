import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from './../../components/User/UserSideBar/UserSideBar';
import UserAllAddress from './../../components/User/UserAllAddress/UserAllAddress';

const UserAllAddresPage = () => {
    return (
        <Container style={{minHeight:'505px'}}>
            <Row className='py-3'>
                <Col lg="2" md='3' sm='4'>
                    <UserSideBar/>
                </Col>
                <Col lg='10' md='9' sm='8'>
                    <UserAllAddress/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserAllAddresPage