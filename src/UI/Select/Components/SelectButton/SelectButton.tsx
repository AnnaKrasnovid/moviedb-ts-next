import ArrowIcon from '@/UI/ArrowIcon/ArrowIcon';

import { SelectButtonInt } from '@/settings/interfaces';

import styles from './SelectButton.module.scss';

function SelectButton({ isActive, openModal, selectedItem }: SelectButtonInt) {
    return (
        <div className={styles['select-button']} onClick={openModal} data-testid='select-button'>
            <span className={`
                ${styles['select-button__title']} 
                ${styles['select-button__title-button']}`
            }>
                {selectedItem}
            </span>
            <span className={`${styles['arrow']} ${isActive ? styles['arrow_up'] : ''}`} data-testid='arrow'>
                <ArrowIcon isActive={isActive} />
            </span>
        </div>
    )
}

export default SelectButton;