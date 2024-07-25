const NoResults = (length: number = 0) => {
    return (
        <>
            {length && 
                <div className="flex flex-col items-center my-8 gap-2">
                    <h3 className="font-bold text-md">No results found</h3>
                    <div>This may not be a product that we stock</div>
                </div>
            }
        </>
    )
}

export default NoResults
