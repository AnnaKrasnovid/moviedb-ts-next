import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ButtonClose from '../ButtonClose';

const onClick = jest.fn();

describe('ButtonClose', () => {

    it('Рендер кнопки с обязательными пропсами', async () => {
        render(
            <ButtonClose
                callback={onClick}
                type='button'
            />
        );

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        await userEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);        
    });

    it('Рендер кнопки c пропсом className', async () => {
        render(
            <ButtonClose
                callback={onClick}
                type='button'
                className='button-class'
            />
        );

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument(); 
        expect(button).toHaveClass('button-class'); 
    });

    it('Рендер кнопки c пропсом position = "right"', async () => {
        render(
            <ButtonClose
                callback={onClick}
                type='button'
                position = 'right'
            />
        );

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument(); 
        expect(button).toHaveClass('button-close_right'); 
    });

    it('Рендер кнопки c пропсом position = "left"', async () => {
        render(
            <ButtonClose
                callback={onClick}
                type='button'
                position = 'left'
            />
        );

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument(); 
        expect(button).not.toHaveClass('button-close_left'); 
    });

    it('Snapshot', () => {
        const button = render(
            <ButtonClose
                callback={onClick}
                type='button'
                position = 'right'
            />
        );

        expect(button).toMatchSnapshot();
    })
})