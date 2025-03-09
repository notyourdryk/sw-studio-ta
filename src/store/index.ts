import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { entityApi } from './entity.api';
import { rowsSlice } from './slices';
import { TreeResponse } from '../models';

const rootReducer = combineReducers({
    [rowsSlice.name]: rowsSlice.reducer,
    [entityApi.reducerPath]: entityApi.reducer,
});
export const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
        rows: {
            root: [],
            nodes: []
        },
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(entityApi.middleware)
});

export type RootState = {
    rows: {
        root: Array<TreeResponse>;
        nodes: Array<TreeResponse>;
    };
}