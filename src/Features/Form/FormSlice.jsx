import {createSlice} from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: "",
        number: 0,
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload
        },
        updateNumber: (state, action) => {
            state.number = action.payload
        }
    }
})

export const {updateName, updateNumber} = formSlice.actions

export default formSlice.reducer