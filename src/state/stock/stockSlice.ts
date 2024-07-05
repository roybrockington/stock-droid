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
        showStock: (state, action: PayloadAction<StockItem[]>) => {
            state.results = action.payload
        },
        runQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        }

    },
})

export const { showStock, runQuery } = stockSlice.actions

export default stockSlice.reducer
