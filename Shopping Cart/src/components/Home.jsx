import React from 'react'
import { v4 as uuid } from "uuid";
import { CartState } from '../context/Context'
import EcomCard from "./Card"
import FilterMenu from './FilterMenu'

const Home = () => {

  const { state:{products} } = CartState();
  return (
    
    <div className='homePage'>
      <FilterMenu />
      <div className='productContainer w-4/5'>
        {
          products.map((prod) => {
          const unique_id = uuid();
          let images = prod.images;
            if(typeof prod.images == "string"){
              images = [prod.images, prod.images, prod.images]
            }
            return <EcomCard key={unique_id} title={prod.title} price={prod.price} image={images} description={prod.description} rating={prod.rating} />
          })
        }
      </div>
    </div>
  )
}

export default Home