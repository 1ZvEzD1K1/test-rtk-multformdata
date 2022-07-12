import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/users'

const rootReducer = combineReducers({
    users: usersReducer
})


export const store = configureStore({
    reducer: rootReducer
})