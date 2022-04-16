import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice";
// create the store
export default configureStore({
    reducer: {
        counter: counterReducer,
        //adding slice reducers to the store
    },
})