import Link from 'next/link';
import Image from 'next/image';

import Facebook from '../../images/facebook.svg';
import Instagram from '../../images/instagram.svg';
import Twitter from '../../images/twitter.svg';

import { links } from '../../settings/contacts';
import { SocialButtonsInt } from '../../settings/interfaces';

import styles from './SocialButtons.module.scss';

function SocialButtons({ type = 'footer' }: SocialButtonsInt) {
  const socialNetworks = [
    { title: 'Facebook', href: links.FACEBOOK, image: Facebook },
    { title: 'Instagram', href: links.INSTAGRAM, image: Instagram },
    { title: 'Twitter', href: links.TWITTER, image: Twitter }
  ]

  return (
    <div className={`${styles['social-buttons']} ${styles[`social-buttons_type_${type}`]}`}>
      {socialNetworks.map((item) => (
        <Link className={styles['social-buttons__link']} href={item.href} target='_blank' key={item.title}>
          <Image className={styles['social-buttons__icon']} src={item.image} alt={item.title} quality={100} />
        </Link>
      ))}
    </div>
  );
}

export default SocialButtons;
