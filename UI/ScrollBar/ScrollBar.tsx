import { ReactNode } from 'react';

import styles from './ScrollBar.module.scss';

export interface ScrollBarInt {
    children: ReactNode,
}

function ScrollBar({ children }:ScrollBarInt) {
    return (
        <div className={styles['scroll']} >
            {children}
        </div>
    );
}

export default ScrollBar;