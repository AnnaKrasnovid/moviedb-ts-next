import { useEffect, useState, memo } from 'react';

import ScrollBar from '../ScrollBar/ScrollBar';
import ArrowIcon from '../ArrowIcon/ArrowIcon';

import { SelectInt } from '../../settings/interfaces';
import { useToggleVisibility } from '../../hooks/useToggleVisibillity';

import styles from './Select.module.scss';

function Select({ options, label, callback, defaultValue }: SelectInt) {
    const {ref, isActive, openModal, closeModal}=useToggleVisibility(false);
    const [selectedItem, setSelectedItem] = useState<string>(options[0].title);

    const choiceOption = (id: string | number) => {
        closeModal();
        const item = options.find((i) => i.id === id);

        if (item) {
            setSelectedItem(item.title);
            callback(item.value);           
        }
    }

    const getTitle = () => {
        const defaultTitle = options.find((item) => item.value === defaultValue);
        const value = defaultValue && defaultTitle ? defaultTitle.title : options[0].title;
        setSelectedItem(value);
    }

    useEffect(() => {
        getTitle();
    }, [defaultValue])
    
    return (
        <div>
            <p className={styles['label-input']}>{label}</p>
            <div className={`${styles['dropdown-select']} ${isActive ? styles['dropdown-select_active'] : ''}`} >
                <div className={`select-button ${styles['dropdown-select__button']}`} onClick={openModal}>
                    <span className={`${styles['dropdown-select__title']} ${styles['dropdown-select__title-button']}`}>{selectedItem}</span>
                    <span className={`${styles['arrow']} ${isActive ? styles['arrow_up'] : ''}`}>
                        <ArrowIcon isActive={isActive} />
                    </span>
                </div>
                <div className={`${styles['dropdown-select__levels']} ${isActive ? styles['dropdown-select__levels_active'] : ''}`} ref={ref}>
                    <ScrollBar>
                        <ul className={styles['dropdown-select__list']}>
                            {options.map((item) => (
                                <li
                                    className={`${styles['dropdown-select__item']} ${item.title === selectedItem ? styles['dropdown-select__item_active'] : ''}`}
                                    key={item.id}
                                    onClick={() => choiceOption(item.id)}>
                                    <span className={styles['dropdown-select__title']}>{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollBar>
                </div>
            </div>
        </div>
    )
}

export default memo(Select);