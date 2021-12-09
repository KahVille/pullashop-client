import { useEffect, useState } from "react";
import FavouriteListItem from "./FavouriteListItem";

type ProdutData = {
    id: number,
    name: string,
    count: number
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
                return <FavouriteListItem  key={product.id} product={product} RemoveItemFromFavourites={() => setFavourites(RemoveItem(product.id)) }/> 
            })}
        </div>
    )
}

export default FavouriteList;

function RemoveItem(id: number): any {
    console.log('removing item ' + id);
    const data = JSON.parse(localStorage.getItem("favouriteList") || '[]') as ProdutData[]
    const filteredData = data.filter(item => item.id !== id);
    localStorage.setItem("favouriteList", JSON.stringify(filteredData))
    return filteredData;
}
