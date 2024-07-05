import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./state/store"
import { useEffect } from "react"
import { showStock } from "./state/stock/stockSlice"
import { StockItem } from "./types"
import Product from "./components/Product.tsx"
import Logo from "./components/Logo.tsx"

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
        <div className="w-full flex flex-col items-center">
            <h1 className="flex text-3xl items-center font-bold border-b border-b-black pb-3 my-5">
                <Logo/>
                Stock Droid
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
