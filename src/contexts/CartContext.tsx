import { createContext, ReactNode, useContext, useState } from 'react';
import { useUserContext } from './UserContext';
import { CartItem, CartType, MenuCategoryItem } from '../utils/types';

type CartContextProps = null | {
  cart: CartType;
  setCart: (value: CartItem) => void;

  handleAddNewItemToCart: (newItem: MenuCategoryItem) => void;
  handleRemoveItemFromCart: (removeItem: CartItem) => void;
  handleAddExistingItemToCart: (addItem: CartItem) => void;

  cartQuantity: number;
};

const CartContext = createContext<CartContextProps>(null);

function CartContextProvider({ children }: { children: ReactNode }) {
  const { user } = useUserContext();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(`cart-${user?.id}`)) || { id: user?.id, content: [] },
  );
  const cartQuantity = cart.content
    ? cart.content.reduce((cur: CartItem, acc: number) => acc.quantity + cur, 0)
    : 0;

  function handleAddNewItemToCart(menuItem: MenuCategoryItem) {
    const newCartItem: CartItem = {
      quantity: 1,
      price: menuItem.price,
      totalPrice: menuItem.price - menuItem.discount,
      totalDiscount: menuItem.discount,
      discount: menuItem.discount,
      itemId: menuItem.id,
      name: menuItem.name,
      image: menuItem.image,
      description: menuItem.description || null,
      type: menuItem.type,
    };

    setCart((cart: CartType) => {
      return {
        id: cart.id,
        content: [...cart.content, newCartItem],
      };
    });
  }

  function handleAddExistingItemToCart(addItem: CartItem) {
    setCart((cart: CartType) => {
      addItem.quantity += 1;
      addItem.totalPrice += addItem.price;
      addItem.totalDiscount += addItem.discount;

      return {
        id: cart.id,
        content: [...cart.content],
      };
    });
  }

  function handleRemoveItemFromCart(removeItem: CartItem) {
    setCart((cart: CartType) => {
      removeItem.quantity -= 1;
      removeItem.totalPrice -= removeItem.price;
      removeItem.totalDiscount -= removeItem.discount;
      if (removeItem.quantity <= 0)
        return { id: cart.id, content: cart.content.filter(item => item.name !== removeItem.name) };
      return { id: cart.id, content: [...cart.content] };
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddNewItemToCart,
        handleRemoveItemFromCart,
        handleAddExistingItemToCart,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  const context = useContext(CartContext);
  if (!context) throw new Error('CartContext was used outside of CartContextProvider');
  return context;
}

export { CartContextProvider, useCartContext };
