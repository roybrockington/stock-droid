import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StockItem, StockState } from "../../types"
import FuzzySearch from "fuzzy-search"

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
    extraReducers: (builder) => {
        builder.addCase(showStockAsync.fulfilled, (state,action: PayloadAction<StockItem[]>) => {
        state.results = action.payload
        })
    },
})

export const showStockAsync = createAsyncThunk(
    "stock/fetch",
    async ({search, inStock}: {search:string, inStock:boolean}) => {
        const api = 'https://scvlabs.co.uk/api/products.json'
        const response = await fetch(api)
        const data = await response.json()
        const products = data.products.filter((x:StockItem) => x !== null)


        const searcher = new FuzzySearch(products, ['description', 'productcode'], {
            sort: true,
        })

        return searcher.search(search)
    }
)

export const { showStock, runQuery } = stockSlice.actions

export default stockSlice.reducer
