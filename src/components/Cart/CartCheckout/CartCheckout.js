import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../CartCheckout/CartCheckout.css'

const CartCheckout = () => {
    return (
        <Row className="my-2 d-flex justify-content-center cart-checkout px-3 py-4">
            <Col sm="12" className="d-flex flex-column">
                <div className="d-flex">
                    <input className="copon-input d-inline text-center" placeholder="كود الخصم" />
                    <button className="copon-btn d-inline">تطبيق</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">34000 جنية</div>
                <Link to="/order/paymethoud" className="d-inline text-decoration-none">
                    <button className="product-cart-add w-100 px-2"> اتمام الشراء</button>
                </Link>
            </Col>
        </Row>
    )
}

export default CartCheckout