import Link from "next/link";
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.listElement}>
                    <Link href="/">Store</Link>
                </li>
                <li className={styles.listElement}>
                    <Link href="/">Mac</Link>
                </li>
                <li className={styles.listElement}>
                    <Link href="/">iPhone</Link>
                </li>
                <li className={styles.listElement}>
                    <Link href="/">Support</Link>
                </li>
            </ul>
        </nav>
    )
}