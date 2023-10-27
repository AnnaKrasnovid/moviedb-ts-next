import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Actor from "./Actor";
import { ActorInt } from "@/settings/interfaces";

describe('Actor', () => {   
    it('name', async () => {
        // @ts-ignore
        render(<Actor actor={{}}/>)
        // screen.debug();
        // expect(screen.queryByText(/Карьера:/i)).toBeNull();
        // expect(await screen.findByText(/Карьера:/i)).toBeInTheDocument();
    })
})