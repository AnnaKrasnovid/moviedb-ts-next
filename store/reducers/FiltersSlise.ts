import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
// import Appst

const initialState = {
    years: 'year=2000-2023',
    rating: 'rating.kp=6-10',
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
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            if (action.type === HYDRATE) {
                // console.log( 'action.payload::::::',action.payload.ServerRouter);
                return {
                    ...state,
                    ...action.payload.filters
                }
            } else {
                return state
            }
        }
    },
});

export const { filterYears, filterRating, filterGenre } = filtersSlice.actions;
export const selectFilters = (state: any) => state.filters
export default filtersSlice.reducer;