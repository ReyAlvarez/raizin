import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let pos = cart.findIndex((product) => product.id === item.id);
      cart[pos].quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const removeItem = (id) => {
    const items = cart.filter((product) => product.id !== id);
    setCart([...items]);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const cartTotal = () => {
    return cart.reduce((acc, item) => (acc += item.quantity), 0);
  };

  const sumTotal = () => {
    return cart.reduce((acc, item) => (acc += item.quantity * item.price), 0);
  };
  console.log(sumTotal);
  return <CartContext.Provider value={{ cart, addItem, removeItem, clear, cartTotal, sumTotal }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
