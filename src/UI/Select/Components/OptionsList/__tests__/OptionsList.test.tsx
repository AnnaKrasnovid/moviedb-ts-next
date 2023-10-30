import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import OptionsList from '../OptionsList';

import { FilterInt } from '@/settings/interfaces';

const onClick = jest.fn();
const mockOptionsList: Array<FilterInt> = [
    { id: '0', title: 'Все жанры', value: '' },
    { id: '1', title: 'Боевик', value: 'боевик' },
    { id: '2', title: 'Военный', value: 'военный' },
];

describe('OptionsList', () => {
    it('Рендер компонента по умолчанию', async () => {
        render(
            <OptionsList
                options={mockOptionsList}
                choiceOption={onClick}
                selectedItem={''}
            />
        );

        mockOptionsList.forEach((item) => {
            expect(screen.getByText(`${item.title}`)).toBeInTheDocument();
        })
    });

    it('Рендер компонента с выбранной опцией', async () => {
        render(
            <OptionsList
                options={mockOptionsList}
                choiceOption={onClick}
                selectedItem={mockOptionsList[1].title}
            />
        );

        mockOptionsList.forEach((item) => {
            expect(screen.getByText(`${item.title}`)).toBeInTheDocument();
        })

        const li = screen.getAllByRole('listitem')[1];
        expect(li).toHaveClass('dropdown-select-list__item_active');
    });

    it('Рендер компонента с пустым массивом опций', async () => {
        render(
            <OptionsList
                options={[]}
                choiceOption={onClick}
                selectedItem={'Боевик'}
            />
        );
        
        const list = screen.queryByRole('list');
        expect(list).toBeNull();
    });

    it('Выбор опции', async () => {
        render(
            <OptionsList
                options={mockOptionsList}
                choiceOption={onClick}
                selectedItem={''}
            />
        );

        const li = screen.getAllByRole('listitem')[1];

        await userEvent.click(li);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('Snapshot', () => {
        const options = render(
            <OptionsList
                options={mockOptionsList}
                choiceOption={onClick}
            />
        );

        expect(options).toMatchSnapshot();
    });
})