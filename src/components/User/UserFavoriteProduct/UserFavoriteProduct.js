import React from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from '../../Products/ProductCard/ProductCard'
import Pagination from '../../Utility/Pagination/Pagination'
import '../UserFavoriteProduct/UserFavoriteProduct.css'

const UserFavoriteProduct = () => {
    return (
        <div>
            <div className='admin-content-text'>قائمة المفضلة</div>
            <Row className='justify-content-start'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Row>
            <Pagination/>
        </div>
    )
}

export default UserFavoriteProduct