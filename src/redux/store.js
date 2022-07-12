import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import usersReducer from './slices/users'
import positionsReducer from './slices/positions'
import postuserReducer from './slices/postuser'

const rootReducer = combineReducers({
    users: usersReducer,
    positions: positionsReducer,
    postuser: postuserReducer
})

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware
})