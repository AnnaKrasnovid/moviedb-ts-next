import { useEffect, useState, SyntheticEvent } from 'react';

import ScrollBar from '../ScrollBar/ScrollBar';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
// import { SubmenuItemInt } from '../../settings/interfaces';

import styles from './Select.module.scss';

export interface OptionItemInt {
    id: string,
    title: string,
    value: string,
}

export interface SelectInt {
    options: Array<OptionItemInt>,
    label?: string,
    placeholder?: string,
    callback: (value: string) => void,
    defaultValue?: any, 
}

function Select({ options, label, placeholder = 'Выберите...', callback, defaultValue }: SelectInt) {
    const [isActiveDropdown, setIsActiveDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string>(placeholder);

    const openDropdown = () => {
        setIsActiveDropdown(true);
    }

    const closeDropdown = () => {
        setIsActiveDropdown(false);
    }

    const toggleDropdown = (e: SyntheticEvent) => {
        if (isActiveDropdown) {
            closeDropdown();
        } else {
            e.stopPropagation();
            openDropdown();
        }
    }

    const choiceOption = (id: string | number) => {
        const item = options.find((i) => i.id === id)
        if (item) {
            setSelectedItem(item.title);
            callback(item.value);
        }
    }   

    useEffect(() => {      
       const value= defaultValue === options[0].title ? options[0].title : defaultValue;   
       // @ts-ignore
       setSelectedItem(value);
    }, [defaultValue])

    useEffect(() => {
        document.addEventListener('click', closeDropdown);
    }, [isActiveDropdown])

    return (
        <div className=''>
            <p className={styles['label-input']}>{label}</p>
            <div className={`${styles['dropdown-select']} ${isActiveDropdown ? styles['dropdown-select_active'] : ''}`} onClick={(e) => toggleDropdown(e)}>
                <div className={styles['dropdown-select__button']}>
                    <span className={`${styles['dropdown-select__title']} ${styles['dropdown-select__title-button']}`}>{selectedItem}</span>
                    <span className={`${styles['arrow']} ${isActiveDropdown ? styles['arrow_up'] : ''}`}>
                        <ArrowIcon isActive={isActiveDropdown} />
                    </span>
                </div>
                <div className={`${styles['dropdown-select__levels']} ${isActiveDropdown ? styles['dropdown-select__levels_active'] : ''}`}>
                    <ScrollBar>
                        <ul className={styles['dropdown-select__list']}>
                            {options.map((item) => (
                                <li className={`${styles['dropdown-select__item']} ${item.title === selectedItem ? styles['dropdown-select__item_active'] : ''}`} key={item.id} onClick={() => choiceOption(item.id)}>
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

export default Select;