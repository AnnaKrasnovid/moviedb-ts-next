import React, { useState, useEffect } from 'react';

import ButtonText from '../../UI/ButtonText/ButtonText';

import { FactsInt, ValueInt } from '../../settings/interfaces';

import styles from './Facts.module.scss';

function Facts({ list }: FactsInt) {
    const [facts, setFacts] = useState(5);
    const [renderList, setRenderList] = useState<Array<ValueInt>>([]);
    console.log(renderList.length,facts)
    function showMoreFacts() {
        setFacts(facts + 5);
    }

    useEffect(() => {
        setRenderList(list.slice(0, facts));
    }, [facts])

    return (
        <div className={styles['facts']}>
            <p className='subtitle'>Факты:</p>
            <ul className={styles['facts__list']}>
                {renderList?.map((item: ValueInt, index: number) => (
                    <li key={index} className={`${styles['facts__item']}`} dangerouslySetInnerHTML={{ __html: item.value }}></li>
                ))}
            </ul>
            <div className={styles['facts__button']}>
                {renderList.length >= facts && <ButtonText text='Показать еще' callback={showMoreFacts} />}
            </div>
        </div>
    );
}

export default Facts;