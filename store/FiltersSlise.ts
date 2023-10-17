import { getCurrentYear } from '../tools/utils';

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        year: `1960-${getCurrentYear()}`,
        rating: '1-10',
        genre: '',
    },
    reducers: {
        filterYears(state, action) {
            state.year = action.payload.years;
        },
        filterRating(state, action) {
            state.rating = action.payload.rating;
        },
        filterGenre(state, action) {
            state.genre = action.payload.genre;
        },
    }
});

export const { filterYears, filterRating, filterGenre } = filtersSlice.actions;
export default filtersSlice.reducer;