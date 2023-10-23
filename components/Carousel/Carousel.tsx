import { ReactNode, useEffect, useState } from 'react';
import { Swiper } from 'swiper/react';
//@ts-ignore
import { Autoplay, Pagination, Navigation } from "swiper";

import { useWindowWidth } from '../../hooks/useWindowWidth';
import { CarouselInt } from '../../settings/interfaces';

function Carousel({
    children,
    slides = [6, 5, 4, 3, 2],
    className,
    loop = true,
    autoplay = false,
    navigation = false
}: CarouselInt) {
    
    const windowWidth = useWindowWidth();
    const [slidesDefault, setSlidesDefault] = useState(0);

    function getNumberSlides() {
        if (Array.isArray(slides)) {
            if (windowWidth > 1365) {
                setSlidesDefault(slides[0]);
            } else if (windowWidth > 1023) {
                setSlidesDefault(slides[1]);
            } else if (windowWidth > 767) {
                setSlidesDefault(slides[2]);
            } else if (windowWidth > 500) {
                setSlidesDefault(slides[3]);
            } else if (windowWidth > 320) {
                setSlidesDefault(slides[4]);
            }
        } else {
            setSlidesDefault(slides)
        }
    }

    useEffect(() => {
        getNumberSlides();
    }, [windowWidth]);

    return (
        <Swiper
            slidesPerView={slidesDefault}
            spaceBetween={20}
            slidesPerGroup={1}
            loop={loop}
            watchOverflow={true}
            className={className}
            autoplay={
                autoplay ? { delay: 3000, disableOnInteraction: false } : false
            }
            speed={1500}
            pagination={{
                clickable: navigation ? true : false,
            }}
            modules={navigation ? [Autoplay, Pagination, Navigation] : []}
        >
            {children}
        </Swiper>
    )
}

export default Carousel;