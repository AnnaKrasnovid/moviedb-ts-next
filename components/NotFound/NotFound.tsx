import { useRouter } from 'next/router';
 import ButtonText from '../../UI/ButtonText/ButtonText';

import styles from './NotFound.module.scss';

function NotFound() {
  const router = useRouter();
  
  return (
    <section className={styles['not-found']}>
      <h2 className={styles['not-found__error']}>404</h2>
      <p className={styles['not-found__description']}>Страница не найдена</p>
      <ButtonText text='Назад' callback={()=>router.back()}/>
    </section>
  );
}

export default NotFound;