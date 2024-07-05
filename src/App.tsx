import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./state/store"
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
        <div className="w-full bg-red-500">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
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
        </div>
    )
}

export default App
