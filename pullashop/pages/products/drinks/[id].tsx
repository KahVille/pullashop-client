import { NextPage } from "next";
import Link from "next/link";
import { productApiUrl } from "../../../config";

const Drink: NextPage = (props:any) => {
    return (
        <div>
        <h1>{props.product.name} Drink</h1>
        <p>{props.product.price}</p>
        <Link href='/' >browse more products</Link>        
        <button onClick= {() => addToFavourites(props.product)}>Add to Favourites</button>
        </div>
    )
}

const getStaticProps = async (context:any) => {
    const response = await fetch (`${productApiUrl}/${context.params.id}`);
    const product = await response.json();
    
    return {
        props: {
            product
        }
    }
}

const getStaticPaths = async () => {
    const response = await fetch (`${productApiUrl}`);
    const allProduct:any[] = await response.json();
    const ids = allProduct.map(product => product.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback:false
    }

}

export default Drink;

export {getStaticPaths, getStaticProps}

const addToFavourites = async (product: any) => {
    const currentFavourites = JSON.parse(localStorage.getItem("favouriteList") || '[]');
    const favourites = [...currentFavourites, product];
    const updatedFavourites = JSON.stringify(favourites);
    localStorage.setItem('favouriteList', updatedFavourites);
}
