import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./state/store"
import './App.css'
import { useEffect } from "react"
import { showStock } from "./state/stock/stockSlice"
import { StockItem } from "./types"
import Product from "./components/Product.tsx"

const App = () => {

    const dispatch = useDispatch()
    const results = useSelector((state: RootState) => state.stock.results)

    const loadProducts = async () => {
        const api = 'https://scvlabs.co.uk/api/products.json'
        const response = await fetch(api)
        const data = await response.json()
        const noNull = data.products.filter((x:StockItem) => x !== null)
        dispatch(showStock(noNull))
    }



    useEffect(() => {
        loadProducts()
    }, [])


    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                {results.map((product) => (
                    <Product
                        title={product.description}
                        barcode={product.barcode}
                        sku={product.productcode}
                        stock={product.availablestock}
                    />
                ))}
            </div>
        </>
    )
}

export default App
