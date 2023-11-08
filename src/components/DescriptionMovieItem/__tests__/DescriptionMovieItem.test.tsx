import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import DescriptionMovieItem from '../DescriptionMovieItem';

describe('DescriptionMovieItem', () => {
    it('Рендер компонента с 2 пропсами', async () => {
        render(<DescriptionMovieItem title='Карьера:' info='Актер' />);

        const list = screen.getByRole('listitem');
        const title = screen.getByText(/карьера/i);
        const info = screen.getByText(/актер/i);

        expect(list).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(info).toBeInTheDocument();
    });

    it('Рендер компонента без пропса info', async () => {
        render(<DescriptionMovieItem title='Карьера:' />);

        const list = screen.getByRole('listitem');
        const title = screen.getByText(/карьера/i);

        expect(list).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });

    // it('snapshot', () => {
    //     const li = render(<DescriptionMovieItem title='Карьера:' info='Актер' />);
    //     expect(li).toMatchSnapshot()
    // })
})