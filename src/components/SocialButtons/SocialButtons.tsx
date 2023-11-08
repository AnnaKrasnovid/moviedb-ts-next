import Link from 'next/link';
import Image from 'next/image';

import { SocialButtonsInt } from '@/settings/interfaces';
import { socialNetworks } from '@/assets/appData/socialNetworks';

import styles from './SocialButtons.module.scss';

function SocialButtons({ type = 'footer' }: SocialButtonsInt) {
  return (
    <div className={`${styles['social-buttons']} ${styles[`social-buttons_type_${type}`]}`}>
      {socialNetworks.map((item) => (
        <Link
          className={styles['social-buttons__link']}
          href={item.href}
          target='_blank'
          key={item.title}>
          <Image
            className={styles['social-buttons__icon']}
            src={item.image}
            alt={item.title}
            quality={100}
          />
        </Link>
      ))}
    </div>
  );
}

export default SocialButtons;
