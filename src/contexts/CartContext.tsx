import { createContext, ReactNode, useContext, useState } from 'react';
import { useUserContext } from './UserContext';
import { CartItem, CartType, MenuCategoryItem, pizzaSizesTypes } from '../utils/types';
import { calculatePizzaSizePrice } from '../utils/calculatePizzaSizePrice';

type CartContextProps = null | {
  cart: CartType;
  setCart: (value: CartItem) => void;

  handleAddNewItemToCart: (menuItem: MenuCategoryItem, pizzaSize: pizzaSizesTypes | null) => void;
  handleRemoveItemFromCart: (removeItem: CartItem) => void;
  handleAddExistingItemToCart: (addItem: CartItem) => void;

  cartQuantity: number;
  cartTotalPrice: number;

  handleClearCart: () => void;
  handleChangePizzaSize: (itemInCart: CartItem, newSize: pizzaSizesTypes) => void;
};

const CartContext = createContext<CartContextProps>(null);

function CartContextProvider({ children }: { children: ReactNode }) {
  const { user } = useUserContext();

  const localData = localStorage.getItem(`cart-${user?.id}`);
  const [cart, setCart] = useState(localData ? JSON.parse(localData) : { id: user?.id, content: [] });

  function updateCartLocalStorage() {
    if (user) localStorage.setItem(`cart-${user?.id}`, JSON.stringify(cart));
  }
  updateCartLocalStorage();

  const cartQuantity = cart.content
    ? cart.content.reduce((cur: number, acc: CartItem) => acc.quantity + cur, 0)
    : 0;

  const cartTotalPrice = cart.content
    ? cart.content.reduce((cur: number, acc: CartItem) => acc.totalPrice + cur, 0)
    : 0;

  function handleAddNewItemToCart(menuItem: MenuCategoryItem, pizzaSize: pizzaSizesTypes | null) {
    let pizzaPrice = null;
    if (menuItem.price && pizzaSize)
      pizzaPrice = menuItem.price + calculatePizzaSizePrice(menuItem.price, pizzaSize);

    const newCartItem: CartItem = {
      quantity: 1,
      price: menuItem.price,
      pizzaPrice: pizzaSize ? pizzaPrice : null,
      totalPrice: pizzaPrice ? pizzaPrice - menuItem.discount : menuItem.price - menuItem.discount,
      totalDiscount: menuItem.discount,
      discount: menuItem.discount,
      itemId: menuItem.id,
      name: menuItem.name,
      image: menuItem.image,
      description: menuItem.description || null,
      type: menuItem.type || null,
      pizzaSize: pizzaSize || null,
    };

    setCart((cart: CartType) => {
      return {
        id: cart.id,
        content: [...cart.content, newCartItem],
      };
    });
  }

  function handleChangePizzaSize(itemInCart: CartItem, newSize: pizzaSizesTypes) {
    const newPizzaPrice = itemInCart.price + calculatePizzaSizePrice(itemInCart.price, newSize);

    itemInCart.pizzaSize = newSize;
    itemInCart.pizzaPrice = newPizzaPrice;
    itemInCart.totalPrice = itemInCart.quantity * newPizzaPrice;

    setCart((cart: CartType) => {
      return { id: cart.id, content: [...cart.content] };
    });
  }

  function handleAddExistingItemToCart(addItem: CartItem) {
    setCart((cart: CartType) => {
      addItem.quantity += 1;
      addItem.totalPrice += addItem.pizzaPrice || addItem.price;
      addItem.totalDiscount += addItem.discount;
      addItem.pizzaSize;

      return {
        id: cart.id,
        content: [...cart.content],
      };
    });
  }

  function handleRemoveItemFromCart(removeItem: CartItem) {
    setCart((cart: CartType) => {
      removeItem.quantity -= 1;
      removeItem.totalPrice -= removeItem.pizzaPrice || removeItem.price;
      removeItem.totalDiscount -= removeItem.discount;
      if (removeItem.quantity <= 0)
        return { id: cart.id, content: cart.content.filter(item => item.name !== removeItem.name) };
      return { id: cart.id, content: [...cart.content] };
    });
  }

  function handleClearCart() {
    setCart((cart: CartType) => {
      return { id: cart.id, content: [] };
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
        cartTotalPrice,
        handleClearCart,
        handleChangePizzaSize,
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
