import { StockItem } from "../types"
import Product from "./Product"

const ProductList = ({results}: {results:StockItem[]}) => {
    return (
        <div className="card">
            {results.map(result => (
                <Product
                    key={result.productcode}
                    title={result.description}
                    barcode={result.barcode}
                    sku={result.productcode}
                    stock={result.availablestock as any}
                />
            ))}
        </div>
    )
}


export default ProductList
