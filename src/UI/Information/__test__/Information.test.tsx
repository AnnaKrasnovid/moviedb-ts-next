import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import Information from '../Information';

describe('Information', () => {
    it('Рендер компонента с text', async () => {
        render(<Information text='Какой-то текст' />);

        const text = screen.getByText(/какой-то текст/i);
        expect(text).toBeInTheDocument();
    });

    it('Рендер Error ReactNode', () => {
        render(<Information text={<span>какой-то элемент</span>} />);

        const text = screen.getByText(/какой-то элемент/i);
        expect(text).toBeInTheDocument();
    });

    it('Snapshot', () => {
        const information = render(<Information text='Какой-то текст' />);
        expect(information).toMatchSnapshot();
    })
})