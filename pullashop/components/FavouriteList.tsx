import { useEffect, useState } from "react";

type ProdutData = {
    id: number,
    name: string,
    avatar:string
}

const FavouriteList = () => {
    const [cartItems, setFavourites] = useState([])
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favouriteList") || '[]')
        setFavourites(data);
}
, [])
    return (
        <div>
            <h2>Your Favourites</h2>
            {cartItems.map((product:ProdutData) => {
                return < h1 key={product.id}> {product.name}</h1>
            })}
        </div>
    )
}


export default FavouriteList;