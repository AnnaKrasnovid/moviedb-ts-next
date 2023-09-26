import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// @ts-ignore
import LogoVector from '../../images/Logo.svg';

import { routes } from '../../settings/routes';
import { LogoInt } from '../../settings/interfaces';

import styles from './Logo.module.scss';

function Logo({ type }: LogoInt) {
  return (
    <Link href={routes.INDEX} className={`${styles['logo']} ${`logo_type_${type}`}`}>
      <Image className={`${styles['logo__img']} ${`logo__img_type_${type}`}`} src={LogoVector} alt='Логотип' />
    </Link>
  );
}

export default Logo;

