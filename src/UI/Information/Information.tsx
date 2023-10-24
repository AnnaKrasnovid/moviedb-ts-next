import { InformationInt } from '@/settings/interfaces';

import styles from './Information.module.scss';

function Information({text}:InformationInt) {
  return (
    <p className={styles['information']}>{text}</p>
  );
}

export default Information;