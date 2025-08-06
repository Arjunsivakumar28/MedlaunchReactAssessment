import { configureStore } from '@reduxjs/toolkit'
import FormReducer from '../Features/Form/FormSlice'


export default configureStore({
    reducer: {
        form: FormReducer,
    },
})