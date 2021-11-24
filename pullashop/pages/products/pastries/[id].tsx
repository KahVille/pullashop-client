import { NextPage } from "next";
import Link from "next/link";
import { productApiUrl } from "../../../config";

const Pastry: NextPage = (props:any) => {
    return (
        <div>
        <h1>{props.product.name}</h1>
        <p>{props.product.price}</p>
        <Link href='/' >browse more products</Link>        
        <button>Add to cart</button>
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

export default Pastry;

export {getStaticPaths, getStaticProps}