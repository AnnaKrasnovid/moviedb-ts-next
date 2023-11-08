import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import ScrollBar from '../ScrollBar';

describe('ScrollBar', () => {
    it('Рендер компонента', async () => {
        render(
            <ScrollBar>
                <div className='children'>children</div>
            </ScrollBar>
        );

        const children = screen.getByText('children')
        expect(children).toBeInTheDocument();
    });

    it('Snapshot', () => {
        const scrollBar = render(
            <ScrollBar>
            <div className='children'>children</div>
        </ScrollBar>
        );

        expect(scrollBar).toMatchSnapshot();
    });
})