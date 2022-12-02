import React from 'react'
import '../ProductGallery/ProductGallery.css'
import ImageGallery from 'react-image-gallery';
import mobile from '../../../images/mobile.png'
import LeftButton from '../LeftButton';
import RightButton from '../RightButton';

const ProductGallery = () => {
    const images= [
        {
            original: `${mobile}`
        },
        {
            original: `${mobile}`
        },
        {
            original: `${mobile}`
        }
    ]


    return (
        <div className="product-gallary-bg bg-white px-3 py-2">
            <ImageGallery
                items={images}
                defaultImage={mobile}
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
                isRTL={true}
            />
        </div>
    )
}

export default ProductGallery