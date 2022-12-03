import React from 'react'
import '../Checkout/ChoosePayMethoud.css'
import { Col, Row } from 'react-bootstrap';

const ChoosePayMethoud = () => {
    return (
        <div>
            <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
            <div className="user-address-card my-3 px-3">
                <Row className="d-flex justify-content-between ">
                    <Col sm="12" className="my-4">
                        <input
                            name="group"
                            id="group1"
                            type="radio"
                            value="الدفع عن طريق الفيزا"
                            className="mt-2"
                        />
                        <label className="mx-2" for="group1">
                            الدفع عن طريق البطاقه الائتمانية
                        </label>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm="12" className="d-flex">
                        <input
                            name="group"
                            id="group1"
                            type="radio"
                            value="الدفع عند الاستلام"
                            className="mt-2"
                        />
                        <label className="mx-2" for="group1">
                            الدفع عند الاستلام
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="d-flex justify-content-end mt-5">
                        <div className="product-price border">34000 جنية</div>
                        <div className="product-cart-add px-3 pt-2 me-2"> اتمام الشراء</div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ChoosePayMethoud