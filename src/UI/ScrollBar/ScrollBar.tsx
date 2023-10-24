import { ScrollBarInt } from '@/settings/interfaces';

import styles from './ScrollBar.module.scss';

function ScrollBar({ children }:ScrollBarInt) {
    return (
        <div className={styles['scroll']} >
            {children}
        </div>
    );
}

export default ScrollBar;