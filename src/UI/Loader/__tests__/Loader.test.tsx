import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import Loader from '../Loader';

describe('Loader', () => {
    it('Рендер компонента', () => {
        render(<Loader />);

        const element = screen.getByRole('loader');
        expect(element).toBeInTheDocument();
    });
})