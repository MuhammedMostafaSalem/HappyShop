import React from 'react'
import { Link } from 'react-router-dom'
import '../subTitle/SubTitle.css'

const Subtitle = ({title , btnTitle , pathText}) => {
    return (
        <div className="d-flex justify-content-between pt-4">
            <div className='sub-tile'>{title}</div>
            {
                btnTitle ? ( 
                    <Link to={`${pathText}`} className='text-decoration-none'>
                        <div className='shopping-now'>{btnTitle}</div>
                    </Link>
                ) : null
            }
        </div>
    )
}

export default Subtitle