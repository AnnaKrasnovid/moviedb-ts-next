import '@testing-library/jest-dom';
// import {expect, jest, test,it} from '@jest/globals';
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Button from './Button';

const onClick = jest.fn();

describe('Button', () => {  

    it('Рендер кнопки со всеми пропсами', async () => {
        render(
            <Button
                type='submit'
                text='Отправить'
                callback={onClick}
                className='button-test'
            />
        )
        screen.debug()
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('button-test');
        expect(screen.getByText(/отправить/i)).toBeInTheDocument();
        await userEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    // it('Рендер кнопки без text', async () => {
    //     render(<Button callback={onClick} />);
    //     const button = screen.getByRole('button')

    //     expect(button).toBeInTheDocument();
    //     expect(screen.getByText(/Title/i)).toBeInTheDocument();
    //     userEvent.click(button);
    //     // !!!
    //     // expect(onClick).toHaveBeenCalledTimes(1);       
    // });

})