import styles from './DescriptionMovieItem.module.scss';

interface DescriptionMovieItemInt {
    title: string,
    info: string | number,
}

function DescriptionMovieItem({ title, info }: DescriptionMovieItemInt) {
    return (
        <li className={styles['description-item']}>
            <p className={styles['description-item__heading']}>{title}</p>
            <p className={styles['description-item__info']}>{info}</p>
        </li>
    );
}

export default DescriptionMovieItem;