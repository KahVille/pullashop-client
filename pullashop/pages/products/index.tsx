import type { NextPage } from 'next'
import Link from 'next/link'

const Products: NextPage = () => {
  return (
    <div>
        <h1>Products</h1>
        <p>Browse through products and choose your favoirite</p>

        <div>
        <Link href="/products/pastries" as={`/products/pastries`}>
          <a>
            <h2>Pastries</h2>
            <p>Find all of the available pastries</p>
          </a>
        </Link>

        <Link href="/products/drinks" as={`/products/drinks`}>
          <a>
            <h2>Drinks</h2>
            <p>Find all available Drinks here</p>
          </a>
        </Link>

        <Link href="#" as={`/products/combos`}>
          <a>
            <h2>Combos</h2>
            <p>Find all combo's of pastries and drinks here</p>
          </a>
        </Link>
        </div>
    </div>
  )
}

export default Products
