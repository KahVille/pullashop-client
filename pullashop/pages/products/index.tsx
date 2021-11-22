import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Products.module.css'

const Products: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PullaShop</title>
        <meta name="description" content="Pullashop where you can browse the best pastries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Products
        </h1>

        <p className={styles.description}>
          Browse through products and choose your favoirite
        </p>

        <div className={styles.grid}>
        <Link href="/products/pastries" as={`/products/pastries`}>
          <a className={styles.card}>
            <h2>Pastries</h2>
            <p>Find all of the available pastries</p>
          </a>
        </Link>

          <a href="#" className={styles.card}>
            <h2>Drinks</h2>
            <p>Find all available Drinks here</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Combos &rarr;</h2>
            <p>Find all combo's of pastries and drinks here</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://kahville.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
        &copy; 2021 - Ville Kähärä
        </a>
      </footer>
    </div>
  )
}

export default Products
