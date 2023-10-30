import React from 'react';
import Image from 'next/image';

import styles from './Banner.module.scss';

interface BannerInt{
    image:string, logo:string
}

function Banner({ image, logo }: BannerInt) {
    return (
        <div className={styles['movie-banner']}>
            <Image
                src={image}
                alt='Постер к фильму'
                className={styles['movie-banner__img']}
                width={100}
                height={100}
                quality={100}
            />
            <div className={styles['movie-banner__container']}>
                <div className={styles['movie-banner__logo']}>
                    <Image
                        src={logo}
                        alt='Постер к фильму'
                        width={50}
                        height={20}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;