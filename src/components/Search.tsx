import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { showStockAsync } from "../state/stock/stockSlice"
import useDebounce from "../hooks/useDebounce"
import { AppDispatch } from "../state/store"

const Search = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [search, setSearch] = useState<string>('')
    const [inStock, setInStock] = useState<boolean>(false)
    const debouncedSearch = useDebounce(search)

    useEffect(() => {
        dispatch(showStockAsync({search: debouncedSearch, inStock: inStock}))
    }, [debouncedSearch, inStock])

    return (
        <>
            <input 
                placeholder="Search products..." 
                value={search} 
                onChange={e => setSearch(e.target.value)}
                className= "border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
            />
            <input
                type="checkbox"
                checked={inStock}
                id="inStock"
                onChange={() => setInStock(!inStock)}
            />
            <label htmlFor="inStock">Only In Stock</label>
        </>
    )

}

export default Search
