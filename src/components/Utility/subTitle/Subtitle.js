import React from 'react'
import '../subTitle/SubTitle.css'

const Subtitle = ({title , btnTitle}) => {
    return (
        <div className="d-flex justify-content-between pt-4">
            <div className='sub-tile'>{title}</div>
            {
                btnTitle ? ( <div className='shopping-now'>{btnTitle}</div> ) : null
            }
        </div>
    )
}

export default Subtitle