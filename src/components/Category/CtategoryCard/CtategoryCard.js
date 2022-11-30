import React from 'react'
import { Col } from 'react-bootstrap'
import '../CtategoryCard/CtategoryCard.css'

const CtategoryCard = ({background , img , title}) => {
    return (
        <Col lg='2' md='4' sm='6' xs='6' className='my-4 d-flex justify-content-around'>
            <div className='allCard mb-3'>
                <div className="categoty-card" style={{backgroundColor: `${background}`}}></div>
                <img src={img} className="categoty-card-img" />
                <p className="categoty-card-text my-2">{title}</p>
            </div>
        </Col>
    )
}

export default CtategoryCard