import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../AdminAllOrdersItem/AdminAllOrdersItem.css'
import mobile from '../../../images/mobile.png'
import deleteicon from '../../../images/delete.png'


const AdminAllOrdersItem = () => {
    return (
        <Col sm='12'>
            <Link to="/admin/orders/23" className="cart-item-body my-2 p-3 d-flex text-decoration-none nav-link">
                <img width="160px" height="197px" src={mobile} alt="" />
                <div className="w-100">
                    <Row className="justify-content-between">
                        <Col sm="12" className="d-flex justify-content-between">
                            <div className="d-inline pt-2 cat-text">طلب رقم #2321</div>
                            <div className="d-flex pt-2 ms-3" style={{ cursor: "pointer" }}>
                                <img src={deleteicon} alt="" width="20px" height="24px" />
                            <div className="cat-text d-inline me-2">ازاله</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-start">
                        <div className="d-inline pt-2 cat-title">
                            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
                        </div>
                        <div className="d-inline pt-2 cat-rate me-2">4.5</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" className="mt-1">
                            <div className="cat-text d-inline">الماركة :</div>
                            <div className="barnd-text d-inline mx-1">ابل </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" className="mt-1 d-flex">
                        <div
                            className="color ms-2 border"
                            style={{ backgroundColor: "#E52C2C" }}></div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 d-flex">
                                <div className="cat-text d-inline">الكميه</div>
                                <input
                                className="mx-2"
                                type="number"
                                style={{ width: "40px", height: "25px" }}
                                />
                            </div>
                            <div className="d-inline pt-2 ms-3 barnd-text">3000 جنية</div>
                        </Col>
                    </Row>
                </div>
            </Link>
        </Col>
    )
}

export default AdminAllOrdersItem