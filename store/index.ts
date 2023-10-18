import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './reducers/FiltersSlise';

export default configureStore({
    reducer: {
        filters: filterReducer,
    }
})