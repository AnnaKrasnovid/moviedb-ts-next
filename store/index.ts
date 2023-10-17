import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './FiltersSlise';

export default configureStore({
    reducer: {
        filters: filterReducer,
    }
})