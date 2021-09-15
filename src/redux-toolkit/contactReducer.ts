import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IContact, IContactState} from "./types"


const initialState: IContact = {
    contacts: []
}

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<IContactState>) => {
            state.contacts.push(action.payload)
        },
        removeContact: (state, action) => {
            state.contacts.splice(action.payload, 1)
        }
    }
})


export const { addContact, removeContact } = contactSlice.actions
export default contactSlice.reducer