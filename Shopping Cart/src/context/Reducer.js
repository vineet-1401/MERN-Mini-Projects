const CartReducer = (state, action) => {
  let newCart;
  
  switch (action.type) {
    case "ADD_TO_CART":
      // Add item to cart and update localStorage
      newCart = [...state.cart, {...action.payload, qty: 1}];
      localStorage.setItem('cart', JSON.stringify(newCart));
      // console.log(temcart);
      console.log(localStorage.getItem('cart'))
      return {...state, cart: newCart};
    
    case "REMOVE_FROM_CART":
      // Remove item from cart and update localStorage
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        newCart = [...state.cart.slice(0, index), ...state.cart.slice(index + 1)];
        localStorage.setItem('cart', JSON.stringify(newCart));
        // console.log(temcart);
        console.log(localStorage.getItem('cart'))
        return {...state, cart: newCart};
      }
      return state;

    default:
      return state;
  }
};

export default CartReducer;
