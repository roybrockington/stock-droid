import { ProductDisplay } from "../types"

const Product = ({ sku, title, stock, barcode }: ProductDisplay) => {
    
    return (
        <div key={sku} className="p-4 flex flex-col items-center border border-zinc-100 rounded mx-8 bg-slate-50 my-4 w-full">
            <div className="text-xl">{title}</div>
            <div className="my-2">{sku}</div>
            <div key={barcode}>{barcode}</div>
            <div className={`font-semibold mt-4 ${Number(stock) > 0 ? 'text-emerald-800' : 'text-red-800'}`}>{stock} available</div>
            <br/>
        </div>
    )
}

export default Product
