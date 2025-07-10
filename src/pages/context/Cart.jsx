import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exist = prev.find((x) => x._id === item._id);
      if (exist) {
        return prev.map((x) =>
          x._id === item._id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };
  const updateCartItem = (id, field, value) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item._id === id ? { ...item, [field]: value } : item
    )
  );
};


  const getTotalItems = () => cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getTotalItems,updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
