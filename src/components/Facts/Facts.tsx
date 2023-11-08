import React, { memo } from 'react';

import ButtonText from '@/UI/ButtonText/ButtonText';
import Subtitle from '@/components/Subtitle/Subtitle';
import FactsList from '../FactsList/FactsList';

import { FactsInt } from '@/settings/interfaces';
import { useShowMore } from '@/hooks/useShowMore';

import styles from './Facts.module.scss';

function Facts({ list }: FactsInt) {
    const { renderList, numberItem, showMoreItems } = useShowMore(list, 5);

    return (
        <>
            {list.length > 0 && (
                <div className={styles['facts']}>
                    <Subtitle text='Факты:' />                
                    <FactsList list={renderList}/>
                    <div className={styles['facts__button']}>
                        {renderList.length >= numberItem &&
                            <ButtonText text='Показать еще' callback={showMoreItems} />
                        }
                    </div>
                </div>
            )}
        </>
    );
}

export default memo(Facts);