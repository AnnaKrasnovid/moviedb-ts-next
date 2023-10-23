import React, {  memo } from 'react';

import ButtonText from '../../UI/ButtonText/ButtonText';
import Subtitle from '../Subtitle/Subtitle';

import { FactsInt, ValueInt } from '../../settings/interfaces';
import { useShowMore } from '../../hooks/useShowMore';

import styles from './Facts.module.scss';

function Facts({ list }: FactsInt) {
    const {renderList, numberItem, showMoreItems} = useShowMore(list, 5);

    return (
        <div className={styles['facts']}>            
            <Subtitle text='Факты:' />
            <ul className={styles['facts__list']}>
                {renderList?.map((item: ValueInt) => (
                    <li key={item.value} className={`${styles['facts__item']}`} dangerouslySetInnerHTML={{ __html: item.value }}></li>
                ))}
            </ul>
            <div className={styles['facts__button']}>
                {renderList.length >= numberItem && <ButtonText text='Показать еще' callback={showMoreItems} />}
            </div>
        </div>
    );
}

export default memo(Facts);