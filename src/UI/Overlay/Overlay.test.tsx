import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Overlay from './Overlay';

const onClick = jest.fn();

describe('Overlay', () => {
    it('Рендер компонента', async () => {
        render(
            <Overlay
                closePopup={onClick}
                className='overlay-test'
                isOpenPopup={false}
            >
                <div className='popup'>Popup</div>
            </Overlay>
        );

        const overlay = screen.getByTestId('overlay');
        const children = screen.getByText('Popup');

        expect(overlay).toBeInTheDocument();
        expect(overlay).toHaveClass('overlay-test');
        expect(children).toBeInTheDocument();
    });

    it('Рендер компонента с пустым children', async () => {
        render(
            <Overlay
                closePopup={onClick}
                isOpenPopup={false}
            >
                <></>
            </Overlay>
        );

        const overlay = screen.getByTestId('overlay');

        expect(overlay).toBeInTheDocument();
    });

    it('Проверка невидимости Overlay', async () => {
        render(
            <Overlay
                closePopup={onClick}
                isOpenPopup={false}
            >
                <div className='popup'>Popup</div>
            </Overlay>
        );

        const overlay = screen.getByTestId('overlay');

        expect(overlay).toBeInTheDocument();
        expect(overlay).not.toHaveClass('overlay_active');
    });

    it('Проверка видимости Overlay', async () => {
        render(
            <Overlay
                closePopup={onClick}
                isOpenPopup={true}
            >
                <div className='popup'>Popup</div>
            </Overlay>
        );

        const overlay = screen.getByTestId('overlay');

        expect(overlay).toBeInTheDocument();
        expect(overlay).toHaveClass('overlay_active');
    });
})