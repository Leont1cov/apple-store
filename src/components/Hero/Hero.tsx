import styles from "./Hero.module.css"
import HeroVideo from "@/src/components/Hero/HeroVideo";
import HeroActions from "@/src/components/Hero/HeroActions";

export default function Hero () {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>iPhone 15 Pro</h1>
                <HeroVideo/>
                <HeroActions/>
            </div>
        </section>
    )
}