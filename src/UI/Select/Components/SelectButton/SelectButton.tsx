import ArrowIcon from '@/UI/ArrowIcon/ArrowIcon';

import styles from './SelectButton.module.scss';

interface SelectButtonInt {
    isActive: boolean,
    openModal: () => void,
    selectedItem: string
}

function SelectButton({ isActive, openModal, selectedItem }: SelectButtonInt) {
    return (
        <div className={styles['select-button']} onClick={openModal}>
            <span className={`
                ${styles['select-button__title']} 
                ${styles['select-button__title-button']}`
            }>
                {selectedItem}
            </span>
            <span className={`${styles['arrow']} ${isActive ? styles['arrow_up'] : ''}`}>
                <ArrowIcon isActive={isActive} />
            </span>
        </div>
    )
}

export default SelectButton;