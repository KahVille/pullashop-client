type Data = {
    product: {
        id: number,
        name: string,
        count: number
    },
    RemoveItemFromFavourites(id:number): any
}

const FavouriteListItem = (props: Data) => {
    const product = props.product;
    return (
        <div>
        <h2>{product.name}</h2>
        <h2> Count: {product.count}</h2>
        <button onClick={() => props.RemoveItemFromFavourites(product.id)}>Remove {product.name} from Favourites</button>
        </div>

    )
}

export default FavouriteListItem;