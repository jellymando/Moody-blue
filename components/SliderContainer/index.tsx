import React from 'react';
import Slider from 'react-slick';
import { Slide, Image } from './styled';

export default function SliderContainer() {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    };
    return (
        <Slider {...settings}>
            <Slide>
                <Image src="/images/promotion/promotion_01.jpg" />
            </Slide>
            <Slide>
                <Image src="/images/promotion/promotion_02.jpg" />
            </Slide>
            <Slide>
                <Image src="/images/promotion/promotion_03.jpg" />
            </Slide>
            <Slide>
                <Image src="/images/promotion/promotion_04.jpg" />
            </Slide>
        </Slider>
    );
}
