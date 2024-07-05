const Product = ({ sku, title, stock, barcode }) => {
    return(
        <div key={sku} className="w-16 p-4">
            <div>{sku}</div>
            <div>{title}</div>
            <div className="font-semibold">{stock}</div>
            <br/>
        </div>
    )
}

export default Product
