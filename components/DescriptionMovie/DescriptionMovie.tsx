import ButtonText from '../../UI/ButtonText/ButtonText';

import styles from './DescriptionMovie.module.scss';

interface DescriptionMovieInt {
    title: string,
    info: string | number,
    buttonText: string,
    callback: () => void,
}

function DescriptionMovie({ title, info, buttonText, callback }: DescriptionMovieInt) {
    return (
        <div className={styles['description-movie']}>
            <div>
                <p className={styles['description-movie__title']}>{title}</p>
                <p className={styles['description-movie__info']}>{info}</p>
            </div>
            {/* <ButtonText text={buttonText} callback={callback} /> */}
        </div>
    );
}

export default DescriptionMovie;