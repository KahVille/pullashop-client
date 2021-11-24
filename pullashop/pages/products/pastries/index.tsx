import type { NextPage } from 'next'
import {useRouter} from 'next/router'
import ProductList from '../../../components/ProductList'
import { productApiUrl } from '../../../config'


const Pastries: NextPage = ({pastries}: any) => {
  const router = useRouter()

  return (
    <div>
        <h1>Pastries</h1>
        <p>Look all of these Pastries we have! Choose your favourite!</p>       
        <ProductList products={pastries} productsPath={router.pathname}/>
    </div>
  )
}

// Pastries to display
type Data = {
  pastries: ProdutData[]
  }

// Pastrie details as ListItem  
type ProdutData = {
    id: number,
    name: string,
    avatar:string
  }

// Fetch Pastries from an api
const getStaticProps = async () => {
    const response = await fetch(`${productApiUrl}`);
    const pastries = await response.json();

    return {
      props: {
        pastries
      } as Data
    }
  }
  
  export { getStaticProps };

export default Pastries