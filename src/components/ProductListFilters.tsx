import { useEffect, useState } from "react"
import { ProductFilters } from "../api/products"
import useDebounce from "../hooks/useDebounce"

type ProductListFiltersProps = {
    onChange: (filters: ProductFilters) => void
}

export const ProductListFilters = ({onChange}: ProductListFiltersProps) => {
    const [search, setSearch] = useState<ProductFilters['search']>()
    const [inStock, setInStock] = useState<ProductFilters['stock']>()
    const debouncedSearch = useDebounce(search)

    useEffect(() => {
        onChange({ 
            search: debouncedSearch,
            stock: inStock
        })
    }, [debouncedSearch, inStock])

    return (
        <div className="flex flex-col gap-4 items-center">
            <input type="text"
                value={search}
                className="border px-4 py-2 w-64"
                onChange={e=>setSearch(e.target.value)}
                placeholder="Search products..."
            />
            <div className="flex gap-4">
                <input type="checkbox" id="inStock" checked={inStock} onChange={
                        () => setInStock(!inStock)
                    }
                />
                <label htmlFor="inStock">Only in stock</label>
            </div>
            
        </div>
    )
}
