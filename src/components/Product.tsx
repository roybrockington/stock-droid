const Product = ({ sku, title, stock, barcode }) => {
    return(
        <div key={sku} className="p-4 flex flex-col items-center">
            <div>{sku}</div>
            <div>{title}</div>
            <div>{barcode}</div>
            <div className="font-semibold">{stock}</div>
            <br/>
        </div>
    )
}

export default Product
