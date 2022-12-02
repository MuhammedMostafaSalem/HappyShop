import React from 'react'
import '../RateContainer/RateContainer.css'
import { Col, Container, Row } from 'react-bootstrap'
import rate from '../../../images/rate.png'
import RateItem from './../RateItem/RateItem';
import Pagination from '../../Utility/Pagination/Pagination';
import RatePost from './../RatePost/RatePost';

const RateContainer = () => {
    return (
        <Container className='rate-container py-3 px-5 mt-3'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div>
                </Col>
            </Row>
            <Row>
                <RatePost/>
                <RateItem/>
                <RateItem/>
                <RateItem/>
            </Row>
            <Row>
                <Pagination/>
            </Row>
        </Container>
    )
}

export default RateContainer