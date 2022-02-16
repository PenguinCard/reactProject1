import {createSlice} from "@reduxjs/toolkit";

const initialState = []

const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        addFiles(state, action) {

        },
        dropAndAddFiles(state, action) {

        },
        uploadFiles(state, action) {

        }
    }
})

export const { addFiles, dropAndAddFiles, uploadFiles } = fileSlice.actions
export default fileSlice.reducer;