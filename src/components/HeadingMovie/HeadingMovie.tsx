import React from 'react';

import styles from './HeadingMovie.module.scss';

interface HeadingMovieInt {
    title: string,
    year:number,
    alternativeName: string |null
}

function HeadingMovie({ title, year,alternativeName }: HeadingMovieInt) {
    return (
        <div className='heading-movie'>
            <h1 className={styles['heading-movie__title']}>
                {title} {year && `(${year})`}
            </h1>
            {alternativeName && (
                <p className={styles['heading-movie__title-en']}>
                    {alternativeName} {year && `(${year})`}
                </p>
            )}
        </div>
    );
}

export default HeadingMovie;