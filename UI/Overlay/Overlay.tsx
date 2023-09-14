import React, { ReactNode } from 'react';

import styles from './Overlay.module.scss';

export interface OverlayInt {
	children: ReactNode
	isOpenPopup: boolean
	closePopup?: () => void
	className?: string
}

export default function Overlay({ children, isOpenPopup, closePopup, className }: OverlayInt) {  

    return (
        <div className={`${styles["overlay"]} ${isOpenPopup ? styles["overlay_active"] : ''} ${className}`} onClick={closePopup}>
            {children}
        </div>
    )
}