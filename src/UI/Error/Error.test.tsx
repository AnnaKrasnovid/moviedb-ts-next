import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import Error from './Error';

describe('Error', () => {
    it('Рендер Error', () => {
        render(<Error text='Ошибка' />)

       expect(screen.getByText(/Ошибка/i)).toBeInTheDocument();      
    });
})