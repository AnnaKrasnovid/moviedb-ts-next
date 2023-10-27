import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Overlay from './Overlay';

const onClick = jest.fn();

// describe('Overlay', () => {
//     it('Рендер кнопки со всеми пропсами', async () => {
//         render(
//             <Overlay
//                 callback={onClick}
//                 className='button-test'
//                 isOpenPopup={false}
//             >
//                 <div>Popup</div>
//             </Overlay>
//         );
//         const button = screen.getByRole('button')

//         expect(button).toBeInTheDocument();
//         expect(button).toHaveClass('button-test');
//         expect(screen.getByText(/отправить/i)).toBeInTheDocument();
//         userEvent.click(button);
//         // !!!
//         // expect(onClick).toHaveBeenCalledTimes(1);       
//     });
// })