import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import Loader from './Loader';

describe('Loader', () => {
    it('Рендер компонента', () => {
        render(<Loader />);
                
        expect(screen.getByRole('loader')).toBeInTheDocument();
    });
})