import styles from "./Header.module.css";
import Navbar from "@/src/components/Navbar/Navbar";
import UserActions from "@/src/components/UserActions/UserActions";
import Logo from "@/src/components/Logo/Logo";

export default function Header (){
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <Logo/>
                <Navbar/>
                <UserActions/>
            </div>

        </div>
    )
}

