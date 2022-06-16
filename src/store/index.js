import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dashboardMainSlice from './slices/dashboardMainSlice';

const rootReducer = combineReducers({
    dashboardSlice: dashboardMainSlice,
})

const store = configureStore({
    reducer: rootReducer,
})


export default store;