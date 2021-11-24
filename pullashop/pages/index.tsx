import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to PullaShop</h1>
      <p>Get started by browsing the categories</p>

      <div>
        <Link href="/products" as={`/products`}>
          <a>
            <h2>Products</h2>
            <p>Find all of the available pastries and drinks here</p>
          </a>
        </Link>

        <Link href="/about" as={`/about`}>
          <a>
            <h2>About us</h2>
            <p>Find more about PullaShop</p>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Home
