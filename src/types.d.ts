export interface StockItem {
    productcode: string
    description: string
    availablestock: number
    salesbaseprice: number
    barcode: string
}

export interface StockState {
    results: StockItem[]
    query: string
}

