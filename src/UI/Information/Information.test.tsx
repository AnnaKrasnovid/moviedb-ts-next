import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import Information from './Information';

describe('Information', () => {
    it('Рендер компонента с text', async () => {
        render(<Information text='Какой-то текст' />);
        expect(screen.getByText(/какой-то текст/i)).toBeInTheDocument();
    });

    it('Рендер Error ReactNode', () => {
        render(<Information text={<span>какой-то элемент</span>} />);
        expect(screen.getByText(/какой-то элемент/i)).toBeInTheDocument();
    });
})