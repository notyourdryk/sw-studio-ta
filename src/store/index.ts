import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { entityApi } from './entity.api';

const rootReducer = combineReducers({
    [entityApi.reducerPath]: entityApi.reducer
})
export const store = configureStore({
    reducer: rootReducer,
    preloadedState: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(entityApi.middleware)
});