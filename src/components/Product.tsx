const Product = ({ sku, title, stock, barcode }) => {
    return(
        <div key={sku}>
            {sku}: {title}
            <div>{stock}</div>
            <br/>
        </div>
    )
}

export default Product
