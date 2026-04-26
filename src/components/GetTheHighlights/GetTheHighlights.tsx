import Link from "next/link";
import styles from "./GetTheHighlights.module.css"
import HighlightsSlider from "@/src/components/HighlightsSlider/HighlightsSlider";

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

                <HighlightsSlider/>

                {/*progress bar*/}
                <div></div>
            </div>
        </section>
    )
}