import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../UserAllOrderCard/UserAllOrderCard.css'
import mobile from '../../../images/mobile.png'

const UserAllOrderCard = () => {
    return (
        <div>
            <Row className="d-flex mb-4">
                <Col md="2" sm="3" className="d-flex justify-content-start">
                    <img width="93px" height="120px" src={mobile} alt="" />
                </Col>
                <Col md="6" sm="8">
                    <div className="pt-2 cat-title">
                        آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
                        تايم (برودكت) أحمر
                    </div>
                    <div className="d-inline pt-2 cat-rate me-2">4.5</div>
                    <div className="rate-count p-1 pt-2">(160 تقييم)</div>
                    <div className="mt-1 d-flex">
                        <div className="cat-text">الكمية</div>
                        <input
                            className="mx-1"
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderCard