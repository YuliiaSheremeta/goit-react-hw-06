import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'contacts',
    initialState: {
       items: [] 
    }, reducers: {
        addContact: (state, action) => {
            state.items = state.items.push(action.payload) 
         },
        deleteContact: (state, action) => { 
           state.items = state.items.splice(action.payload)  
        },
        
    }
})

export default splice.reducer;

export const {addContact,deleteContact } = slice.actions;