import React from 'react'
import '../ProductCard/ProductCard.css'
import { Card, Col } from 'react-bootstrap';
import prod1 from "../../../images/prod1.png";
import rate from "../../../images/rate.png";
import favoff from "../../../images/fav-off.png";

const ProductCard = () => {
    return (
        <Col lg='3' md='6' sm='12'>
            <Card className="my-2" style={ {width: '100%' , height: "345px", borderRadius: "8px", border: "none", backgroundColor: "#FFFFFF", boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)"} }>
                <Card.Img style={ {width:'100%' , height:'228px'} } src={prod1} />
                <div className="d-flex justify-content-end mx-2">
                    <img src={favoff} alt="" className="text-center" style={{ height: "24px", width: "26px",}} />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">سود كربون ساعة يد ذكية بيب إس أسود كربون</div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex">
                                <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">4.5</div>
                            </div>
                            <div className="d-flex">
                                <div className="card-price">880</div>
                                <div className="card-currency mx-1">جنيه</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard