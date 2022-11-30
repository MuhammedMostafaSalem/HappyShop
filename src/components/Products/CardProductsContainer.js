import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Subtitle from './../Utility/subTitle/Subtitle';
import ProductCard from './ProductCard/ProductCard';

const CardProductsContainer = ({title , btnTitle}) => {
    return (
        <Container className='py-3'>
            <Subtitle title={title} btnTitle={btnTitle} />
            <Row className='my-2 d-flex justify-content-between'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Row>
        </Container>
    )
}

export default CardProductsContainer