import { memo, useState } from 'react';

import Error from '../Error/Error';

import { InputSearchInt } from '../../settings/interfaces';

import styles from './InputSearch.module.scss';

function InputSearch({searchValue,setSearchValue }:InputSearchInt) {
    const [isActiveSearchClass, setIsActiveSearchClass] = useState(false);
    const [isActiveInput, setIsActiveInput] = useState(false);
    
    function handleMouseEnter() {
        setIsActiveSearchClass(true);
    }

    function handleMouseLeave() {
        setIsActiveSearchClass(false);
    }

    function handleOnFocusInput() {
        setIsActiveInput(true);
    }

    function handleOnBlurInput() {
        setIsActiveInput(false);
    }

    function handleChange(e: any) {
        setSearchValue(e.target.value)
    }
    
    return (
        <div
            className='input-box'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleOnFocusInput}
            onBlur={handleOnBlurInput}>
            <div className={`${styles['input-box__box']} ${isActiveSearchClass || isActiveInput ? styles['input-box__box_active'] : ''}`}>
                <input
                    id='search'
                    name='search'
                    className={styles['input-box__input']}
                    type='text'
                    placeholder='Поиск'
                    minLength={1}
                    autoComplete='off'
                    value={searchValue}
                    onChange={ handleChange}
                />
                <span className={`${styles['input-box__icon']} ${isActiveInput ? styles['input-box__icon_active'] : ''}`} ></span>
            </div>
            <Error text='' />
        </div>
    )
}

export default memo(InputSearch);