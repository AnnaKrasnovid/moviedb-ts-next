import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import InputSearch from '../InputSearch';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

describe('InputSearch', () => {
    it('Рендер компонента', () => {
        render(
            <InputSearch
                searchValue=''
                setSearchValue={onChange}
            />
        );

        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    it('добавить текст в инпут', async () => {
        render(
            <InputSearch
                searchValue=''
                setSearchValue={onChange}
            />
        );

        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'фильм');
        expect(onChange).toHaveBeenCalledTimes(5);
    });

    it('рендер комполента с value !== пустой строке', () => {
        render(
            <InputSearch
                searchValue='сериал'
                setSearchValue={onChange}
            />);

        const input = screen.getByRole('textbox');
        expect(input).toHaveValue('сериал');
    });

    it('Snapshot', () => {
        const input = render(
            <InputSearch
                searchValue=''
                setSearchValue={onChange}
            />);
            
        expect(input).toMatchSnapshot();
    })
})