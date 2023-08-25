import Link from 'next/link';

import { useRouter } from 'next/router';
import { MenuItemInt } from '../../settings/interfaces';

import styles from './Submenu.module.scss';
interface SubmenuInt {
  item: MenuItemInt,
  isActiveSubmenu: boolean,
}

function Submenu({ item, isActiveSubmenu }: SubmenuInt) {
  const { asPath } = useRouter();

  return (
    <div className={`${styles['menu']} ${isActiveSubmenu ? styles['menu_opened'] : ''}`}>
      <ul className={styles['menu__list']}>
        {item.submenu && item.submenu.map((i) => (
          <li className={styles['menu__genre']} key={i.id}>
            <Link
              href={`${item.path}/${i.path}`}
              className={`${styles['menu__link']} ${asPath === `${item.path}/${i.path}` ? styles['menu__link_active'] : ''}`}
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
