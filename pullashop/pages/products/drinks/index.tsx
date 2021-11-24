import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../../styles/Pastries.module.css'
import ProductList from '../../../components/ProductList'
import { productApiUrl } from '../../../config'


const Drinks: NextPage = ({drinks}: any) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>PullaShop</title>
        <meta name="description" content="Pullashop where you can browse the best pastries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Drinks</h1>
        <p className={styles.description}>Look all of these Drinks we have! Choose your favourite!</p>
        <ProductList products={drinks} productsPath={router.pathname}/>
      </main>

      <footer className={styles.footer}>
        <a href="https://kahville.github.io" target="_blank" rel="noopener noreferrer">
        &copy; 2021 - Ville Kähärä
        </a>
      </footer>
    </div>
  )
}

// Drinks to display
type Data = {
    drinks: ProdutData[]
  }

// Drink details as ListItem  
type ProdutData = {
    id: number,
    name: string,
    avatar:string
  }

// Fetch Drinks from an api
const getStaticProps = async () => {
    const response = await fetch(`${productApiUrl}`);
    const drinks = await response.json();

    return {
      props: {
        drinks
      } as Data
    }
  }
  
  export { getStaticProps };

export default Drinks