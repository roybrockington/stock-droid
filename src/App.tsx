import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./state/store"
import './App.css'
import { useEffect } from "react"
import { showStock } from "./state/stock/stockSlice"
import { StockItem } from "./types"

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
                <div>{product.productcode}</div>
                ))}
      </div>
    </>
  )
}

export default App
