import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StockItem, StockState } from "../../types"

const initialState: StockState = {
    results: []
}

const stockSlice = createSlice({
    name: "stock",
    initialState,
    reducers: {
        showStock: (state, action: PayloadAction<StockItem[]>) => {
            state.results = action.payload
        }

    },
})

export const { showStock } = stockSlice.actions

export default stockSlice.reducer
