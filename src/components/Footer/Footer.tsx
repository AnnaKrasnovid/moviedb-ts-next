import Link from 'next/link';

import Logo from '@/components/Logo/Logo';
import SocialButtons from '@/components/SocialButtons/SocialButtons';

import { footerText } from '@/assets/appData/footerText';
import { getCurrentYear } from '../../tools/utils';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__container']}>
        <Logo type='footer' />
        <div className={styles['footer__box-about']}>
          <p className={styles['footer__title']}>О нас</p>
          {footerText.map((item) => (
            <p className={styles['footer__about']} key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className={styles['footer__box-info']}>
        <p className={styles['footer__info']}>Все права защищены MovieDB.ru {getCurrentYear()}</p>
        <SocialButtons type='footer' />
        <Link className={`${styles['footer__info']} ${styles['footer__info_type_link']}`} href='#' target='_blank'>
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
