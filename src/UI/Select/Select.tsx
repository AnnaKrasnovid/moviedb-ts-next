import { useEffect, useState, memo } from 'react';

import ScrollBar from '@/UI/ScrollBar/ScrollBar';
import OptionsList from './Components/OptionsList/OptionsList';
import SelectButton from './Components/SelectButton/SelectButton';

import { useToggleVisibility } from '../../hooks/useToggleVisibillity';
import { SelectInt } from '@/settings/interfaces';

import styles from './Select.module.scss';

function Select({ options, label = '', callback, defaultValue }: SelectInt) {
    const { ref, isActive, openModal, closeModal } = useToggleVisibility(false);
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
        <div className={styles['dropdown']}>
            {label &&
                <p className={styles['dropdown__label']} data-testid='select-label'>
                    {label}
                </p>
            }
            <div className={`${styles['dropdown__select']} ${isActive ? styles['dropdown__select_active'] : ''}`} >
                <SelectButton isActive={isActive} openModal={openModal} selectedItem={selectedItem} />
                <div className={`
                    ${styles['dropdown__options']} 
                    ${isActive ? styles['dropdown__options_active'] : ''}`}
                    ref={ref}
                    data-testid='dropdown-options'
                >
                    <ScrollBar>
                        <OptionsList options={options} choiceOption={choiceOption} selectedItem={selectedItem} />
                    </ScrollBar>
                </div>
            </div>
        </div>
    )
}

export default memo(Select);