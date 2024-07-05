import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StockItem, StockState } from "../../types"

const initialState: StockState = {
    results: [],
    query: ''
}

const stockSlice = createSlice({
    name: "stock",
    initialState,
    reducers: {
        runQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        },
        showStock: (state, action: PayloadAction<StockItem[]>) => {
            state.results = action.payload
        }
    },
})

export const { showStock, runQuery } = stockSlice.actions

export default stockSlice.reducer
