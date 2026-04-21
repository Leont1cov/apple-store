import Button from "@/src/components/Button/Button";
import styles from "./Hero.module.css";

export default function HeroActions () {
    return (
        <div className={styles.actions}>
            <Button />
            <p>From $199/month or $999</p>
        </div>
    )
}