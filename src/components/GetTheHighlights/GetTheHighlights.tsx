import Link from "next/link";
import styles from "./GetTheHighlights.module.css"
import Swiper from "@/src/components/Swiper/Swiper";

export default function GetTheHighlights() {
    return (
        <section className={styles.getTheHighlights}>
            {/*content*/}
            <div>
                {/*text content*/}
                <div className={styles.textContent}>
                    <h1 className={styles.title}>Get the highlights.</h1>
                    {/*links*/}
                    <div>
                        <Link href="/">Watch the film</Link>
                        <Link href="/">Watch the event </Link>
                    </div>
                </div>

                <Swiper/>

                {/*progress bar*/}
                <div></div>
            </div>
        </section>
    )
}