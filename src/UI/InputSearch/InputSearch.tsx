import { memo, useCallback, useState } from 'react';

import Error from '@/UI/Error/Error';

import { InputSearchInt } from '@/settings/interfaces';

import styles from './InputSearch.module.scss';

function InputSearch({searchValue,setSearchValue }:InputSearchInt) {
    const [isActiveSearchClass, setIsActiveSearchClass] = useState(false);
    const [isActiveInput, setIsActiveInput] = useState(false);
    
    const handleMouseEnter=useCallback(()=> {
        setIsActiveSearchClass(true);
    },[isActiveSearchClass])

    const handleMouseLeave=useCallback(()=>{
        setIsActiveSearchClass(false);
    },[isActiveSearchClass])

    const handleOnFocusInput=useCallback(()=>{
        setIsActiveInput(true);
    },[isActiveInput])

    const  handleOnBlurInput=useCallback(()=>{
        setIsActiveInput(false);
    },[isActiveInput])

    function handleChange(e: any) {
        setSearchValue(e.target.value)
    }
    
    return (
        <div
            className='input-box'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleOnFocusInput}
            onBlur={handleOnBlurInput}
            >
            <div className={`${styles['input-box__box']} ${isActiveSearchClass || isActiveInput ? styles['input-box__box_active'] : ''}`}>
                <input
                    id='search'
                    name='search'
                    className={styles['input-box__input']}
                    type='text'
                    placeholder='Поиск фильма'
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