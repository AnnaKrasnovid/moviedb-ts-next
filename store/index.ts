import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './reducers/filtersSlise';
import { paginationReducer } from "./reducers/paginationSlice";

export default configureStore({
    reducer: {
        filters: filterReducer,
        pagination: paginationReducer
    }
})

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;