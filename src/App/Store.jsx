import { configureStore } from '@reduxjs/toolkit'
import FormReducer from '../Features/Form/formSlice'


export default configureStore({
    reducer: {
        form: FormReducer,
    },
})