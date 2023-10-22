import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import filterReducer from './reducers/filtersSlise';
import { moviesApi } from "../services/MoviesApi";
import { createWrapper } from "next-redux-wrapper";

// export const store = () => configureStore({
//     reducer: {
//         filters: filterReducer,
//         [moviesApi.reducerPath]: moviesApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(moviesApi.middleware),

//     devTools: true,

// })

export const  makeStore=(store={}) => configureStore({
        reducer: {
            filters: filterReducer,
            [moviesApi.reducerPath]: moviesApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(moviesApi.middleware),        
    });

const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch //AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
export const wrapper = createWrapper<RootStore>(makeStore, { debug: false });

// export type AppStore = ReturnType<typeof makeStore>;
// export type AppDispatch = AppStore['dispatch'];
// export type AppState = ReturnType<AppStore['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
// export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

