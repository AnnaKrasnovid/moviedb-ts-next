import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Select from '../Select';
import { FilterInt } from '@/settings/interfaces';

const onClick = jest.fn();
const mockList: Array<FilterInt> = [
    { id: '0', title: 'Все жанры', value: '' },
    { id: '1', title: 'Боевик', value: 'боевик' },
    { id: '2', title: 'Военный', value: 'военный' },
];

describe('Select', () => {
    it('Рендер компонента с обязательными пропсами', () => {
        render(
            <Select
                options={mockList}
                callback={onClick}
            />
        );

        const label = screen.queryByTestId('select-label');
        const optionDefault = screen.getByTestId('select-button');

        expect(optionDefault).toContainHTML(mockList[0].title);
        expect(label).toBeNull();
    });

    it('Рендер компонента с label', () => {
        render(
            <Select
                options={mockList}
                callback={onClick}
                label={'Название select'}
            />
        );

        const label = screen.queryByText('Название select');
        expect(label).toBeInTheDocument();
    });

    it('Открытие/выбор опции/закрытие dropdown', async () => {
        render(
            <Select
                options={mockList}
                callback={onClick}
            />
        );
        const selectButton = screen.getByTestId('select-button');
        const optionsList = screen.queryByTestId('dropdown-options');
        const option = screen.getByText(mockList[2].title);

        // клик по селекту и проверка видимости dropdown
        await userEvent.click(selectButton);
        expect(optionsList).toHaveClass('dropdown__options_active');

        // кликнули по выбранной опции, проверили закрытие dropdown
        await userEvent.click(option);
        expect(optionsList).not.toHaveClass('dropdown__options_active');

        // проверка изменения текста в селекте
        expect(selectButton).toContainHTML(mockList[2].title);
    });

    it('snapshot', () => {
        const select = render(<Select options={mockList} callback={onClick} />);
        expect(select).toMatchSnapshot()
    })
})