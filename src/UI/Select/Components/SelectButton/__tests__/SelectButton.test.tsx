import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import SelectButton from '../SelectButton';

const onClick = jest.fn();

describe('SelectButton', () => {
    it('Рендер компонента по умолчанию', () => {
        render(
            <SelectButton
                isActive={false}
                openModal={onClick}
                selectedItem={'Все жанры'}
            />
        );

        const element = screen.getByText('Все жанры');
        const arrow = screen.getByTestId('arrow');

        expect(element).toBeInTheDocument();
        expect(arrow).not.toHaveClass('arrow_up');
    });

    it('Проверка активного компонента', () => {
        render(
            <SelectButton
                isActive={true}
                openModal={onClick}
                selectedItem={'Все жанры'}
            />
        );

        const element = screen.getByTestId('select-button');
        const arrow = screen.getByTestId('arrow');

        expect(element).toBeInTheDocument();
        expect(arrow).toHaveClass('arrow_up');
    });

    it('Проверка клика по компоненту', async () => {
        render(
            <SelectButton
                isActive={true}
                openModal={onClick}
                selectedItem={'Все жанры'}
            />
        );

        const element = screen.getByTestId('select-button');

        await userEvent.click(element);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('Snapshot', () => {
        const buttonSelect = render(
            <SelectButton
                isActive={false}
                openModal={onClick}
                selectedItem={'Все жанры'}
            />
        );

        expect(buttonSelect).toMatchSnapshot();
    });
})