import ProductListItem from "./ProductListItem";

type Data = {
    products: ProdutData[]
}

type ProdutData = {
    id: number,
    name: string,
    avatar:string
}

const ProductList = (props: Data) => {
    const allProducts = props.products;
    return (
        <div>
            {allProducts.map((product:ProdutData) => {
                return <ProductListItem key={product.id} product={product}/>
            })}
        </div>
    )
}


export default ProductList;