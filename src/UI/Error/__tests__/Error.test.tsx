import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import Error from '../Error';

describe('Error', () => {
    it('Рендер Error', () => {
        render(<Error text='Ошибка' />);

        const text = screen.getByText(/Ошибка/i);
        expect(text).toBeInTheDocument();
    });

    it('Snapshot', () => {
        const error = render(<Error text='Ошибка' />);
        expect(error).toMatchSnapshot()
    })
})