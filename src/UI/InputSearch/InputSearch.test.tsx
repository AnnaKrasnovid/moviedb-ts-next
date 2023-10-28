import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";

import InputSearch from './InputSearch';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();
const mockSetTodos = ''

describe('InputSearch', () => {
    it('Рендер компонента', () => {
        render(<InputSearch searchValue='' setSearchValue={onChange} />);

        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    it('добавить текст в инпут', async () => {
        render(<InputSearch searchValue={''} setSearchValue={onChange} />);

        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'фильм');
        expect(onChange).toHaveBeenCalledTimes(5);
    });
})