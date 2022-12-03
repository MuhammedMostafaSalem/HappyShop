import React from 'react'
import '../AdminAllProductsCard/AdminAllProductsCard.css'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from '../../../images/prod1.png'

const AdminAllProductsCard = () => {
    return (
        <Col lg="4" md="6" sm='12' className="d-flex">
            <Card className="adminCard my-2 p-2">
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div className="item-delete-edit">ازاله</div>
                        <div className="item-delete-edit">تعديل</div>
                    </Col>
                </Row>
                <Link to="/products/:id" style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                سود كربون ساعة يد ذكية بيب إس أسود كربون{" "}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">4.5</div>
                                <div className="d-flex">
                                    <div className="card-currency mx-1">جنيه</div>
                                    <div className="card-price">880</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard