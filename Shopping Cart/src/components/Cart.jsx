import React from 'react'
import { CartState } from '../context/Context'
import Subtotal from './Subtotal'


const Cart = () => {
  const { state: { products, cart }, dispatch } = CartState()
  return (
    <div className='homePage'>
    <div className='w-3/4'></div>
      <Subtotal />
    </div>
  )
}

export default Cart