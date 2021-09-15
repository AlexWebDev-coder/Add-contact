import { createSlice } from '@reduxjs/toolkit';

export interface IContactState {
    id: number,
    name: string,
    number: string
}

export interface IContact {
    contacts: IContactState[]
}

const initialState: IContact = {
    contacts: []
}

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)
        },
        removeContact: (state, action) => {
            state.contacts.splice(action.payload, 1)
        }
    }
})


export const { addContact, removeContact } = contactSlice.actions
export default contactSlice.reducer