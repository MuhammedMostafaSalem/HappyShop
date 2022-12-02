import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader/CategoryHeader'
import CardProductsContainer from '../../components/Products/CardProductsContainer';
import ProductDetalis from './../../components/Products/ProductDetalis';
import RateContainer from './../../components/Rate/RateContainer/RateContainer';

const ProductDetalisPage = () => {
    return (
        <div style={{ minHeight:'505px'}}>
            <CategoryHeader/>
            <Container>
                <ProductDetalis/>
                <RateContainer/>
                <CardProductsContainer title='منتجات قد تعجبت'/>
            </Container>
        </div>
    )
}

export default ProductDetalisPage