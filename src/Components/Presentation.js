import styles from "../styles/Presentation.module.css"
import { IoIosArrowDown } from "react-icons/io"

function Presentation() {
    return <div className={styles.presentation}>
        <strong>ARIEL <br /> AGUILERA</strong>
        <span>DESARROLLADOR SEMI-SENIOR</span>
        <div className={styles.scroll_down}>
            <div className={styles.mouse}>
                <span />
            </div>
        </div>
    </div>
}

export default Presentation;