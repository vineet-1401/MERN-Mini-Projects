import React, { createContext, useContext, useReducer } from 'react'
import CartReducer from './Reducer.js'
import {data} from '../components/Data.jsx'

const Cart = createContext()


const Context = ({ children }) => {
  

const products = data;

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: []
  });

  return (
    <Cart.Provider value={{ state, dispatch }} >
      {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartState = () => {
  // const {state, dispatch} = useContext(Cart);
  // return {state, dispatch};
  return useContext(Cart)
}