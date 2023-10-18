import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        page: 1
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        resetPage: (state) => {
            state.page = 1;
        }
    },
});

export const { setPage,resetPage } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;