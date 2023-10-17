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
            console.log(action)
        },
        filterRating(state, action) {
            console.log(action)
        },
        filterGenre(state, action) {
            console.log(action)
        },
    }
});

export const { filterYears, filterRating, filterGenre } = filtersSlice.actions;
export default filtersSlice.reducer;