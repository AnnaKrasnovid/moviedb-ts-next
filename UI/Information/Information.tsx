import styles from './Information.module.scss';

interface InformationInt {
    text: string
}

function Information({text}:InformationInt) {
  return (
    <p className={styles['information']}>{text}</p>
  );
}

export default Information;