import React from 'react';

import { FactsInt, ValueInt } from '@/settings/interfaces';

import styles from './FactsList.module.scss';

function FactsList({ list }: FactsInt) {
    return (
        <>
            {list.length > 0 &&
                <ul className={styles['facts-list']}>
                    {list.map((item: ValueInt) => (
                        <li
                            key={item.value}
                            className={`${styles['facts-list__item']}`}
                            dangerouslySetInnerHTML={{ __html: item.value }}
                        >
                        </li>
                    ))}
                </ul>
            }
        </>
    );
}

export default FactsList;