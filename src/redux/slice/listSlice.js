import { createSlice } from "@reduxjs/toolkit";

const initialState = { rows: [], idx: 0 }

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addOneList(state, action) {
            state.idx = state.idx + 1
            state.rows = [
                ...state.rows,
                {
                    idx: state.idx,
                    status: false,
                    content: action.payload.content
                }
            ]
        },
        delAllList(state) {
            state.rows = []
        },
        delOneList(state, action) {
            state.rows = state.rows.filter(row => row.idx === action.payload ? null : row)
        },
        modOneList(state, action) {
            state.rows = state.rows.map(row => {
                if(row.idx === action.payload.row.idx) return action.payload.row;
                return row;
            })
        }
    }
})

export const { addOneList, delAllList, delOneList, modOneList } = listSlice.actions
export default listSlice.reducer