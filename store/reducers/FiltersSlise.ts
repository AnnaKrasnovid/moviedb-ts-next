import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    years: '',
    rating: '',
    genre: '',
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterYears(state, action) {
            state.years = action.payload.years;
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