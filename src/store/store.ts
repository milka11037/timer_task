import { combineReducers, configureStore } from '@reduxjs/toolkit';

import messageReducer from './reducers/TimerSlice';

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']


const rootReducer = combineReducers({
    messageReducer
});

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};