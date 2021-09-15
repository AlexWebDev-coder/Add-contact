import { configureStore } from '@reduxjs/toolkit';
import contactReducer from "./contactReducer"

export const store = configureStore({
    reducer: {
        usersContact: contactReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch