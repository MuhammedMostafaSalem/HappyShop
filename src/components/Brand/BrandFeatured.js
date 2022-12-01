import React from 'react'
import BrandCard from './BrandCard';
import { Container, Row } from 'react-bootstrap';
import Subtitle from './../Utility/subTitle/Subtitle';
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";

const BrandFeatured = ({title , btnTitle , pathText}) => {
    return (
        <Container className='py-3'>
            <Subtitle title={title} btnTitle={btnTitle} pathText='/AllBrand' />
            <Row className='my-1 d-flex justify-content-between'>
                <BrandCard img={brand1} />
                <BrandCard img={brand2} />
                <BrandCard img={brand3} />
                <BrandCard img={brand2} />
                <BrandCard img={brand1} />
                <BrandCard img={brand3} />

            </Row>
        </Container>
    )
}
export default BrandFeatured