import ProductListItem from "./ProductListItem";

type Data = {
    products: ProdutData[],
    productsPath: string
}

type ProdutData = {
    id: number,
    name: string,
    avatar:string
}

const ProductList = (props: Data) => {
    const allProducts = props.products;
    const productsPath = props.productsPath
    return (
        <div>
            {allProducts.map((product:ProdutData) => {
                return <ProductListItem key={product.id} product={product} productPath={productsPath}/>
            })}
        </div>
    )
}


export default ProductList;