import Link from 'next/link';
import Logo from '../Logo/Logo';
import SocialButtons from '../SocialButtons/SocialButtons';
import { footerText } from '../../assets/appData/footerText';

import styles from './Footer.module.scss';

function Footer() {
  const date = new Date();

  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__container']}>
        <Logo type='footer' />
        <div className={styles['footer__box-about']}>
          <h4 className={styles['footer__title']}>О нас</h4>
          <p className={styles['footer__about']}>
            {footerText.text1}
          </p>
          <p className={styles['footer__about']}>
            {footerText.text2}
          </p>
        </div>
      </div>
      <div className={styles['footer__box-info']}>
        <p className={styles['footer__info']}>Все права защищены MovieDB.ru {date.getFullYear()}</p>
        <SocialButtons type='footer' />
        <Link className={`${styles['footer__info']} ${'footer__info_type_link'}`} href='#' target='_blank'>Политика конфиденциальности</Link>
      </div>
    </footer>
  );
}

export default Footer;
