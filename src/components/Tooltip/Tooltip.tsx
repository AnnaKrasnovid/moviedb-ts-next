import { TooltipInt } from '@/settings/interfaces';

import styles from './Tooltip.module.scss';

function Tooltip({ isOpenTooltip, text = 'Что-то пошло не так...' }: TooltipInt) {
    return (
        <div className={`${styles['tooltip']} ${isOpenTooltip ? styles['tooltip_active'] : ''} `}>
            <p className={styles['tooltip__text']}>{text}</p>
        </div>
    )
}

export default Tooltip;