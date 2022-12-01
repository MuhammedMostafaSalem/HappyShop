import React from 'react'
import BrandContainer from './../../components/Brand/BrandContainer';
import Pagination from './../../components/Utility/Pagination/Pagination';

const AllBrandPage = () => {
    return (
        <div style={{minHeight:'505px'}}>
            <BrandContainer/>
            <Pagination/>
        </div>
    )
}

export default AllBrandPage