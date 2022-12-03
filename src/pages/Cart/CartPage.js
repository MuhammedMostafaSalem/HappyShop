import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from './../../components/Cart/CartItem/CartItem';
import CartCheckout from './../../components/Cart/CartCheckout/CartCheckout';

const CartPage = () => {
    return (
        <Container style={{ minHeight: "505px" }}>
            <Row>
                <div className='cart-title mt-4'>عربة التسوق</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col md="9" sm='12'>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </Col>
                <Col md='3' sm='6'>
                    <CartCheckout/>
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage