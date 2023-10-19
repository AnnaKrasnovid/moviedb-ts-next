import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './reducers/filtersSlise';

export default configureStore({
    reducer: {
        filters: filterReducer,
    }
})

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;