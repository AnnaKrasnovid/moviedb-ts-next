import { useState } from 'react';

import InputSearch from '../../UI/InputSearch/InputSearch';

import styles from './SearchForm.module.scss';

function SearchForm() {
  return (
    <form className={styles['search']} noValidate>
     <InputSearch />
    </form>
  );
}

export default SearchForm;
