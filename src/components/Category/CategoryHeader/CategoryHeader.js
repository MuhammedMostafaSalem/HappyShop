import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../CategoryHeader/CategoryHeader.css'


const CategoryHeader = () => {
    return (
        <div className='Category-header'>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-start py-2 flex-wrap">
                        <div className="category-text-header">الكل</div>
                        <div className="category-text-header">الكترونيات</div>
                        <div className="category-text-header">ملابس</div>
                        <div className="category-text-header"> كهربيه</div>
                        <div className="category-text-header">تخفيضات</div>
                        <div className="category-text-header">تخفيضات</div>
                        <div className="category-text-header">المزيد</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CategoryHeader