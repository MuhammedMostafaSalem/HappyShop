import React from 'react'
import '../RatePost/RatePost.css'
import { Col, Row } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component"

const RatePost = () => {
    const setting = {
        count:5,
        size:20,
        a11y: true,
        isHalf:true,
        emptyIcon:<i className="far fa-star"></i>,
        halfIcon:<i className="fa fa-star-half-alt"></i>,
        filledIcon:<i className="fa fa-star"></i>,
        activeColor:"#ffd700",
        onChange: newValue => {
            console.log(`Example 2: new value is ${newValue}`);
        }
    }
    
    return (
        <div>
            <Row className="mt-3">
                <Col sm="12" className="me-5 d-flex">
                    <div className="rate-name d-inline ms-3 mt-1 ">علي محمد</div>
                    <ReactStars {...setting} />
                </Col>
            </Row>
            <Row className="mx-2">
                <Col className="d-felx me-4 pb-2">
                    <textarea className="form-control p-2 my-2" placeholder="اكتب تعليقك...." id="floatingTextarea"/>
                    <div className="d-flex justify-content-end al">
                        <div className="product-cart-add px-3 py-2 text-center d-inline">اضف تعليق</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RatePost