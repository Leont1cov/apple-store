import styles from "@/src/components/Hero/Hero.module.css";

export default function HeroVideo() {
    return (
        <video className={styles.video} autoPlay muted loop playsInline preload="auto">
            <source src="/videos/hero.mp4" type="video/mp4" />
            Что-то
        </video>
    )
}