import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Actor from "../Actor";
import { ActorInt } from "@/settings/interfaces";
import { actorOne } from '@/assets/mockData/actor';

describe('Actor', () => {
    it('name', async () => {
        render(<Actor actor={actorOne} />);

        const photo = screen.queryByAltText(`Фотография ${actorOne.name}`);
        expect(photo).toBeNull()
       // !!!
    })
})