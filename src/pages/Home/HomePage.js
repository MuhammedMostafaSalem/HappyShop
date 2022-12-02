import React from 'react'
import Slider from '../../components/Home/Slider/Slider';
import HomeCategory from './../../components/Home/HomeCategory/HomeCategory';
import CardProductsContainer from './../../components/Products/CardProductsContainer';
import DiscountSection from './../../components/Home/DiscountSection/DiscountSection';
import BrandFeatured from './../../components/Brand/BrandFeatured';

const HomePage = () => {
    return (
        <div style={{minHeight:'670px'}}>
            <Slider/>
            <HomeCategory/>
            <CardProductsContainer title='الاكثر مبيعا' btnTitle='المزيد' pathText='/Products' />
            <DiscountSection/>
            <CardProductsContainer title='احدث الازياء' btnTitle='المزيد' pathText='/Products' />
            <BrandFeatured title='اشهر الماركات' btnTitle='المزيد' />
        </div>
    )
}

export default HomePage