import { useRouter } from 'next/router';
import ButtonText from '../../UI/ButtonText/ButtonText';

import styles from './NotFound.module.scss';

interface NotFoundInt {
  status?: string,
  message?: string
}

function NotFound({ status='', message='' }: NotFoundInt) {
  const router = useRouter();

  return (
    <section className={styles['not-found']}>
     <h2 className={styles['not-found__error']}>{status}</h2>
      <p className={styles['not-found__description']}>{message}</p>
      <ButtonText text='Назад' callback={() => router.back()} />
    </section>
  );
}

export default NotFound;