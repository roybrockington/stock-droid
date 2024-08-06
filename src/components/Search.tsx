import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { runQuery, showStockAsync } from "../state/stock/stockSlice"
import useDebounce from "../hooks/useDebounce"
import { RootState } from "../state/store"

const Search = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search)
    const results = useSelector((state: RootState) => state.stock.results)

    useEffect(() => {
        dispatch(showStockAsync({search: debouncedSearch, inStock: true}))
    }, [debouncedSearch])

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
            <button onClick={()=>console.log(results)}>test</button>
            </>
    )

}

export default Search
