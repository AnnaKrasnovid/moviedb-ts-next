import Link from 'next/link';
import Image from 'next/image';

import Facebook from '../../images/facebook.svg';
import Instagram from '../../images/instagram.svg';
import Twitter from '../../images/twitter.svg';

import { links } from '../../settings/contacts';
import { SocialButtonsInt } from '../../settings/interfaces';

import styles from './SocialButtons.module.scss';

function SocialButtons({ type='footer' }:SocialButtonsInt) {
  return (
    <div className={`${styles['social-buttons']} ${styles[`social-buttons_type_${type}`]}`}>
      <Link className={styles['social-buttons__link']} href={links.FACEBOOK} target='_blank'>
        <Image className={styles['social-buttons__icon']} src={Facebook} alt='Facebook' />
      </Link>
      <Link className={styles['social-buttons__link']} href={links.INSTAGRAM}  target='_blank'>
        <Image className={styles['social-buttons__icon']} src={Instagram} alt='Instagram' />
      </Link>
      <Link className={styles['social-buttons__link']} href={links.TWITTER}  target='_blank'>
        <Image className={styles['social-buttons__icon']} src={Twitter} alt='Twitter' />
      </Link>
    </div>
  );
}

export default SocialButtons;
