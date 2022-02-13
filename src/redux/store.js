import { configureStore, combineReducers } from "@reduxjs/toolkit";
import list from './slice/listSlice'

const reducer = combineReducers({
    list
})

export default configureStore({
    reducer
})