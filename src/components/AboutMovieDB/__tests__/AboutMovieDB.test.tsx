import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import AboutMovieDB from "../AboutMovieDB";

describe('AboutMovieDB', () => {
    it('рендер компонента', () => {
        render(<AboutMovieDB />);

        const text = screen.getByText(/MovieDB.ru/i);
        const list = screen.getByRole('list');

        expect(text).toBeInTheDocument();
        expect(list).toBeInTheDocument();
    })
})