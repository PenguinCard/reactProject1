import { configureStore, combineReducers } from "@reduxjs/toolkit";
import list from './reducer/listSlice'

const reducer = combineReducers({
    list
})

export default configureStore({
    reducer
})