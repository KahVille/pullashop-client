import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import ProductList from '../../../components/ProductList'
import { productApiUrl } from '../../../config'


const Drinks: NextPage = ({drinks}: any) => {
  const router = useRouter();

  return (
    <div>
      <h1>Drinks</h1>
      <p>Look all of these Drinks we have! Choose your favourite!</p>
      <ProductList products={drinks} productsPath={router.pathname}/>
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