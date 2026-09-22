import { createContext,useState } from "react";

export const CartContext = createContext(undefined)

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  function AddToCart(product) {
    setCart([product, ...cart])
  }
  function deleteItem(id)
  {
    let cart1=[];
    for(let i=0; i<cart.length; i++){
      if(cart[i]._id===id)
      {
        continue;
        
      }
       cart1.push(cart[i]);
    }
    setCart(cart1);
  }
  return (
    <CartContext.Provider value={{cart, AddToCart, deleteItem}}>

      {children}
    </CartContext.Provider>

  )
}

export default CartProvider;