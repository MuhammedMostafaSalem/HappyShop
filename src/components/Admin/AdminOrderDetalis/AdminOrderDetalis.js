import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CartItem from '../../Cart/CartItem/CartItem'
import '../AdminOrderDetalis/AdminOrderDetalis.css'

const AdminOrderDetalis = () => {
    return (
        <div>
            <div className='admin-content-text'>تفاصيل الطلب رقم#55</div>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>

            <Row className='bg-white p-3'>
                <Col md='12' className='my-1'>
                    <div className="admin-content-text py-2">تفاصيل العميل</div>
                </Col>
                    <Col md="12" className="d-flex my-1">
                    <div className='customDetails'>الاسم:</div>
                    <div className="mx-2 customName">احمد عبدالله</div>
                </Col>
                <Col md="12" className="d-flex my-1">
                    <div className='customDetails'>رقم الهاتف:</div>
                    <div className="mx-2 customName">0021313432423</div>
                </Col>
                <Col md="12" className="d-flex my-1">
                    <div className='customDetails'>الايميل:</div>
                    <div className="mx-2 customName">marwan@gmail.com</div>
                </Col>
                <div className="py-2 border text-center totalPrice">
                المجموع 4000 جنيه
                </div>
                <div className="d-flex mt-3 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1 text-center p-2 w-50">
                        <option value="val">حالة الطلب</option>
                        <option value="val2">قيد التنفيذ</option>
                        <option value="val2">تم الانتهاء</option>
                        <option value="val2">الغاء</option>
                    </select>
                    <button className="btn btn-dark px-3 mx-2">حفظ</button>
                </div>
            </Row>
        </div>
    )
}

export default AdminOrderDetalis