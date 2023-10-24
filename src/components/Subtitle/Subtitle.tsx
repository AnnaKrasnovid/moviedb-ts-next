import { InformationInt } from "@/settings/interfaces";
import styles from './Subtitle.module.scss'; 

function Subtitle({text}:InformationInt) {
    return(
        <p className={styles['subtitle']}>{text}</p>
    )
}

export default Subtitle;