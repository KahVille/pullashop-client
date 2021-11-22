import Link from 'next/link';
import Image from 'next/image'

type Data = {
    product: {
        id: number,
        name: string,
        avatar:string
    }
}

const ProductListItem = (props: Data) => {
    const product = props.product;
    // TODO: Fill the proper links for pastries
    return (
        <Link href="/product/[id]" as={`/product/${product.id}`}>
            <a>
                <Image src='/kahvilleShopLogo.png' width="300" height="300" alt="Picture of the product" />
                <h3>
                {product.name} &rarr;</h3>
                <p>{product.name} is the best beacause it has lot&apos;s of fat and grease</p>
            </a>
        </Link>
    )
}

export default ProductListItem;