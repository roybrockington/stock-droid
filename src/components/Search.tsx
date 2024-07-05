import { useState } from "react"
import FuzzySearch from 'fuzzy-search'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { runQuery } from "../state/stock/stockSlice"

const Search = () => {
    const dispatch = useDispatch()

    const [search, setSearch] = useState('')
    const results = useSelector((state: RootState) => state.stock.results)
    const query = useSelector((state: RootState) => state.stock.query)

    const searcher = new FuzzySearch(results, ['description', 'productcode'], {
        sort: true,
    });

    const submit = e => {
        e.preventDefault()
        dispatch(runQuery(search))
    }

    return (
        <form onSubmit={submit}>
            <input 
                placeholder="Search products..." 
                value={search} 
                onChange={e => setSearch(e.target.value)}
                className= "border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search"/>
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                search
            </button>
            <button onClick={()=> console.log(query)}>test</button>
        </form>
    )

}

export default Search
