import { useSelector } from "react-redux"
import { RootState } from "./state/store"
import Logo from "./components/Logo"
import Search from "./components/Search"
import ProductList from "./components/ProductList"

const App = () => {
    const results = useSelector((state: RootState) => state.stock.results)

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="flex text-3xl items-center font-bold border-b border-b-black pb-3 my-5 gap-2">
                <Logo/>
                Stock Droid
            </h1>
            <Search />
            <ProductList results={results}/>
        </div>
    )
}

export default App
