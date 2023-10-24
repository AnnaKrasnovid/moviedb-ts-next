import React, { ReactNode, useEffect } from 'react';

import { hideScroll } from '../../tools/utils';
import { OverlayInt } from '@/settings/interfaces';

import styles from './Overlay.module.scss';

export default function Overlay({ children, isOpenPopup, closePopup, className }: OverlayInt) {
    useEffect(() => {
        hideScroll(isOpenPopup)
    }, [isOpenPopup])

    return (
        <div className={`${styles["overlay"]} ${isOpenPopup ? styles["overlay_active"] : ''} ${className}`} onClick={closePopup}>
            {children}
        </div>
    )
}