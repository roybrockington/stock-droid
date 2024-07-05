import { useState } from "react"
import { useDispatch } from "react-redux"
import { runQuery } from "../state/stock/stockSlice"

const Search = () => {
    const dispatch = useDispatch()

    const [search, setSearch] = useState('')

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(runQuery(search))
    }

    return (
        <form onSubmit={submit}>
            <input 
                placeholder="Search products..." 
                value={search} 
                onChange={e => setSearch(e.target.value)}
                className= "border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                type="search" name="search"
            />
        </form>
    )

}

export default Search
