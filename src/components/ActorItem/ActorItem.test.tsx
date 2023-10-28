import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import userEvent from '@testing-library/user-event';

import ActorItem from './ActorItem';
import { ActorSimpleItemInt } from '@/settings/interfaces';

const mockItem: ActorSimpleItemInt = {
    description: "Tony Stark",
    enName: "Robert Downey Jr.",
    enProfession: "actor",
    id: 10096,
    name: "Роберт Дауни мл.",
    photo: "https://st.kp.yandex.net/images/actor_iphone/iphone360_10096.jpg",
    profession: "актеры",
}

describe('ActorItem', () => {
    it('Рендер компонента', () => {
        render(<ActorItem item={mockItem} />);

        const image = screen.getByAltText(`Фотография ${mockItem.name}`);
        const name = screen.getByText(mockItem.name);

        expect(image).toBeInTheDocument();
        expect(name).toBeInTheDocument();
    });

    it('Клик по компоненту', async () => {
        render(<ActorItem item={mockItem} />);

        const component = screen.getByTestId('link-actor-item');
        // await userEvent.click(component);
        //!!! link
    });
})