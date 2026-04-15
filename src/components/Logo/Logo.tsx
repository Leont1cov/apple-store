import Link from "next/link";
import style from "./Logo.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple} from "@fortawesome/free-brands-svg-icons";

export default function Logo () {
    return (
        <Link href="/" className={style.logo}>
            <FontAwesomeIcon icon={faApple} />
        </Link>
    )
}