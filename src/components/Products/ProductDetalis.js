import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductText from './ProductText/ProductText';

const ProductDetalis = () => {
    return (
        <Row className='py-4'>
            <Col md='4' sm='6'>
                <ProductGallery/>
            </Col>
            <Col md='8' sm='6'>
                <ProductText/>
            </Col>
        </Row>
    )
}

export default ProductDetalis