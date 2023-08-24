import { useState } from 'react';
import styles from './SearchForm.module.scss';

function SearchForm() {
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

  return (
    <form
      className={styles['search']}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleOnFocusInput}
      onBlur={handleOnBlurInput}
      noValidate>
      <div>
        <div className={`${styles['search__box']} ${isActiveSearchClass || isActiveInput ? styles['search__box_active'] : ''}`}>
          <input
            id='search'
            name='search'
            className={styles['search__input']}
            type='text'
            placeholder='Поиск'
            minLength={1}
            autoComplete='off'
          /*value={values.search || ''}*/
          />
          <span className={`${styles['search__icon']} ${isActiveInput ? styles['search__icon_active' ]: ''}`} ></span>
        </div>

        <span id='search-input-error' className={styles['search__error']}> </span>
      </div>
    </form>
  );
}

export default SearchForm;
