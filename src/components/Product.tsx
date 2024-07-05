import { ProductDisplay } from "../types"

const Product = ({ sku, title, stock, barcode }: ProductDisplay) => {
    
    return (
        <div key={sku} className="p-4 flex flex-col items-center border border-zinc-100 rounded">
            <div className="text-xl">{title}</div>
            <div>{sku}</div>
            <div key={barcode}>{barcode}</div>
            <div className="font-semibold">{stock}</div>
            <br/>
        </div>
    )
}

export default Product
