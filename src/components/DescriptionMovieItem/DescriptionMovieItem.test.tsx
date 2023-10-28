import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import DescriptionMovieItem from './DescriptionMovieItem';

describe('DescriptionMovieItem', () => {
    it('Рендер компонента с 2 пропсами', async () => {
        render(<DescriptionMovieItem title='Карьера:' info='Актер' />);

        expect(screen.getByRole('listitem')).toBeInTheDocument();
        expect(screen.getByText(/карьера/i)).toBeInTheDocument();
        expect(screen.getByText(/актер/i)).toBeInTheDocument();
    });

    it('Рендер компонента без пропса info', async () => {
        render(<DescriptionMovieItem title='Карьера:' />);
        
        expect(screen.getByRole('listitem')).toBeInTheDocument();
        expect(screen.getByText(/карьера/i)).toBeInTheDocument();
    });

    // it('snapshot', () => {
    //     const li = render(<DescriptionMovieItem title='Карьера:' info='Актер' />);
    //     expect(li).toMatchSnapshot()
    // })
})