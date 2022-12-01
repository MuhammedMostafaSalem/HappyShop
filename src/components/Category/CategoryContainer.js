import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Subtitle from './../Utility/subTitle/Subtitle';
import CtategoryCard from './CtategoryCard/CtategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";

const CategoryContainer = () => {
    return (
        <Container>
            <Subtitle title='كل التصنيفات' />
            <Row className='my-2 pb-4 d-flex justify-content-between'>
                <CtategoryCard img={clothe} background="#F4DBA4" title="اجهزة منزلية"/>
                <CtategoryCard img={cat2} background="#F4DBA4" title="اجهزة منزلية"/>
                <CtategoryCard img={labtop} background="#0034FF" title="اجهزة منزلية"/>
                <CtategoryCard img={sale} background="#F4DBA4" title="اجهزة منزلية"/>
                <CtategoryCard img={clothe} background="#FF6262" title="اجهزة منزلية"/>
                <CtategoryCard img={pic} background="#F4DBA4" title="اجهزة منزلية"/>
                <CtategoryCard img={clothe} background="#F4DBA4" title="اجهزة منزلية"/>
                <CtategoryCard img={cat2} background="#F4DBA4" title="اجهزة منزلية"/>
                <CtategoryCard img={labtop} background="#0034FF" title="اجهزة منزلية"/>
                <CtategoryCard img={sale} background="#F4DBA4" title="اجهزة منزلية"/>
                <CtategoryCard img={clothe} background="#FF6262" title="اجهزة منزلية"/>
                <CtategoryCard img={pic} background="#F4DBA4" title="اجهزة منزلية"/>
                <CtategoryCard img={clothe} background="#F4DBA4" title="اجهزة منزلية"/>
                <CtategoryCard img={cat2} background="#F4DBA4" title="اجهزة منزلية"/>
                <CtategoryCard img={labtop} background="#0034FF" title="اجهزة منزلية"/>
                <CtategoryCard img={sale} background="#F4DBA4" title="اجهزة منزلية"/>
                <CtategoryCard img={clothe} background="#FF6262" title="اجهزة منزلية"/>
                <CtategoryCard img={pic} background="#F4DBA4" title="اجهزة منزلية"/>
            </Row>
        </Container>
    )
}

export default CategoryContainer