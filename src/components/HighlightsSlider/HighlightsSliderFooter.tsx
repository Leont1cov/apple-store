import styles from "@/src/components/HighlightsSlider/HighlightsSlider.module.css";
import Image from "next/image";

export function HighlightsSliderFooter() {
    return (
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
    )
}