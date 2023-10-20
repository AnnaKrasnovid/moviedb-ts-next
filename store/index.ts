import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './reducers/filtersSlise';
import { moviesApi } from "../services/MoviesApi";

export default configureStore({
    reducer: {
        filters: filterReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware)
})
