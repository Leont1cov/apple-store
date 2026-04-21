import Link from "next/link";
import styles from "./Button.module.css"

export default function Button () {
    return (
        <Link className={styles.button} href="/">Buy</Link>
    )
}