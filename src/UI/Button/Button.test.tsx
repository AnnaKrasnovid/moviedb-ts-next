import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Button from './Button';

const onClick = jest.fn();

describe('Button', () => {

    it('Рендер кнопки с обязательными пропсами', async () => {
        render(
            <Button
                text='Отправить'
                callback={onClick}
            />
        ) 

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(screen.getByText(/отправить/i)).toBeInTheDocument();
        await userEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('Рендер кнопки c пропсом className', async () => {
        render(
            <Button
                text='Отправить'
                callback={onClick}
                className='button-test'
            />
        );
        
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('button-test');
    });
})