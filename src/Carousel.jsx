import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
import React from 'react'
import './Carousel.css'

const Carousel = () => {
    return (
        <div>
            <MDBCarousel showControls interval={3000}>
                <MDBCarouselItem itemId={1} interval={1000}>
                    <img src='https://www.shutterstock.com/shutterstock/photos/2056851833/display_1500/stock-vector--d-shopping-sale-promotion-banner-full-shopping-cart-on-round-podium-with-countdown-clock-and-2056851833.jpg' className='img' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <img src='https://static.vecteezy.com/system/resources/previews/007/146/732/non_2x/people-run-with-shopping-cart-bag-present-box-black-friday-big-sale-banner-illustration-vector.jpg' className='img' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <img src='https://png.pngtree.com/background/20231030/original/pngtree-d-render-of-shopping-cart-gift-items-and-bags-on-discount-picture-image_5793186.jpg' className='img' alt='...' />
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    )
}

export default Carousel
