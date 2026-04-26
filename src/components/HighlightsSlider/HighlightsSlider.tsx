'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './HighlightsSlider.module.css';

const highlightsData = [
    {
        id: 1,
        video: "/videos/highlight-first.mp4",
        text: ["Enter A17 Pro.", "Game-changing chip.", "Groundbreaking performance."]
    },
    {
        id: 2,
        video: "/videos/hightlight-third.mp4",
        text: ["Titanium.", "So strong. So light. So Pro."]
    },
    {
        id: 3,
        video: "/videos/hightlight-sec.mp4",
        text: ["iPhone 15 Pro Max has the", "longest optical zoom in", "iPhone ever. Far out."]
    },
    {
        id: 4,
        video: "/videos/hightlight-fourth.mp4",
        text: ["All-new Action button.", "What will yours do?."]
    }
];

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

            <div className={styles.footer}>
                <div className={styles.controlsWrapper}>
                    <div className={styles.controls}>
                    </div>

                    <button className={styles.playBtn} onClick={() => {}}>
                        <Image
                            src="/assets/images/play.svg"
                            alt="play/pause"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
