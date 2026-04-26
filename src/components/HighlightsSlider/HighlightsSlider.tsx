'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './HighlightsSlider.module.css';

import {highlightsData} from "@/src/types/highlightsData";
import {HighlightsSliderFooter} from "@/src/components/HighlightsSlider/HighlightsSliderFooter";

export default function HighlightsSlider() {
    return (
        <div className={styles.wrapper}>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={40}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: `.${styles.controls}`,
                    bulletClass: styles.dot,
                    bulletActiveClass: styles.dotActive,
                }}
                className={styles.mySwiper}
            >
                {highlightsData.map((slide) => (
                    <SwiperSlide key={slide.id} className={styles.slide}>
                        <video
                            src={slide.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                        />
                        <div className={styles.slideContent}>
                            {slide.text.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <HighlightsSliderFooter/>
        </div>
    );
}
