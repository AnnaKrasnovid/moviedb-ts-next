import styles from './OptionsList.module.scss';

interface OptionsListInt {
    options: Array<any>,
    choiceOption: (id: string | number) => void,
    selectedItem?: string,
}

function OptionsList({ options, choiceOption, selectedItem='' }: OptionsListInt) {

    return (
        <>
            {options.length > 0 && <ul className={styles['dropdown-select-list']}>
                {options.map((item) => (
                    <li
                        className={`
                        ${styles['dropdown-select-list__item']} 
                        ${item.title === selectedItem ? styles['dropdown-select-list__item_active'] : ''}
                    `}
                        key={item.id}
                        onClick={() => choiceOption(item.id)}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>}
        </>
    )
}

export default OptionsList;