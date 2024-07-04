import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface StockItem {
    title: string
    stock: number
    ean: string
    sku: string
}

interface StockState {
    results: StockItem []
}

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
