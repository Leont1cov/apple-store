import styles from "./UserActions.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSistrix} from "@fortawesome/free-brands-svg-icons";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";

export default function UserActions() {
    return (
        <div className={styles.actions}>
            <FontAwesomeIcon icon={faSistrix} className={styles.icon}/>
            <FontAwesomeIcon icon={faBagShopping} className={styles.icon}/>
        </div>
    )
}