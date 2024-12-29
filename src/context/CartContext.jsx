import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const deleteById = (id) => {
    const nuevoArray = cart.filter((elemento) => elemento.id !== id);
    setCart(nuevoArray);
  };

  const resetCart = () => {
    setCart([]);
  };

  const getTotalAmount = () => {
    return cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((acc, elemento) => acc + elemento.quantity, 0);
  };

  const data = {
    addToCart,
    cart,
    resetCart,
    deleteById,
    getTotalAmount,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
