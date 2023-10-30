import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ButtonBurger from '../ButtonBurger';

const onClick = jest.fn();

describe('ButtonBurger', () => {

    it('Рендер кнопки', async () => {
        render(<ButtonBurger callback={onClick} />)

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        await userEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('Snapshot', () => {
        const button = render(<ButtonBurger callback={onClick} />);
        expect(button).toMatchSnapshot()
    })
})