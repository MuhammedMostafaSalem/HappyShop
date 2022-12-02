import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CategoryHeader from './../../components/Category/CategoryHeader/CategoryHeader';
import SearchCountResult from './../../components/Utility/SearchCountResult/SearchCountResult';
import SideFilter from './../../components/Utility/SideFilter/SideFilter';
import CardProductsContainer from './../../components/Products/CardProductsContainer';
import Pagination from './../../components/Utility/Pagination/Pagination';

const ShopProductsPage = () => {
    return (
        <div style={{minHeight:'505px'}}>
            <CategoryHeader/>
            <Container>
                <SearchCountResult title='نتجية بحث 400'/>
                <Row className='d-flex flex-row'>
                    <Col lg='2' md='3' sm='4' className='d-flex' >
                        <SideFilter/>
                    </Col>
                    <Col lg='10' md='9' sm='8'>
                        <CardProductsContainer/>
                    </Col>
                </Row>
                <Pagination/>
            </Container>
        </div>
    )
}

export default ShopProductsPage