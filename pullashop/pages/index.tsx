import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Products.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PullaShop</title>
        <meta name="description" content="Pullashop where you can browse the best pastries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to PullaShop
        </h1>

        <p className={styles.description}>
          Get started by browsing the categories
        </p>

        <div className={styles.grid}>
        <Link href="/products" as={`/products`}>
          <a className={styles.card}>
            <h2>Products</h2>
            <p>Find all of the available pastries and drinks here</p>
          </a>
          </Link>
          
          <a href="#" className={styles.card}>
            <h2>About us</h2>
            <p>Find more about PullaShop</p>
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

export default Home
