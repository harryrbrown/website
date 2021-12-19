import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
    name: 'config',
    initialState: {
        isHomepage: false
    },
    reducers: {
        setTrue: (state) => {
            state.isHomepage = true
        },
        setFalse: (state) => {
            state.isHomepage = false
        }
    }
})

export const { setTrue, setFalse } = configSlice.actions

export default configSlice.reducer