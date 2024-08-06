import FuzzySearch from "fuzzy-search"
import { StockItem } from "../types"
import { showStock } from "../state/stock/stockSlice"
import { useDispatch } from "react-redux"

export type ProductFilters = {
    stock?: boolean
    search?: string
}
const dispatch = useDispatch()

const loadProducts = async (query: string) => {
    console.log(query)

    const api = 'https://scvlabs.co.uk/api/products.json'
    const response = await fetch(api)
    const data = await response.json()
    const products = data.products.filter((x:StockItem) => x !== null)


    const searcher = new FuzzySearch(products, ['description', 'productcode'], {
        sort: true,
    })

    const fuzzyResult = searcher.search(query)
    

    dispatch(showStock(fuzzyResult as StockItem[]))
}

export default loadProducts
