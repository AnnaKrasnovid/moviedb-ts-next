import Link from 'next/link';

import { useRouter } from 'next/router';
import { SubmenuInt } from '../../settings/interfaces';

import styles from './Submenu.module.scss';

function Submenu({ item, isActiveSubmenu }: SubmenuInt) {
  const { query } = useRouter();

  return (
    <div className={`${styles['menu']} ${isActiveSubmenu ? styles['menu_opened'] : ''}`}>
      <ul className={styles['menu__list']}>
        {item.submenu && item.submenu.map((i) => (
          <li className={styles['menu__genre']} key={i.id}>
            <Link
              href={`${item.path}/${i.value}`}
              className={`${styles['menu__link']} ${query.genre === `${i.value}` ? styles['menu__link_active'] : ''}`}
            >
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Submenu;
