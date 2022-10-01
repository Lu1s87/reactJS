import { useState } from "react"; 
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] =useState ([]);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            alert('ya esta en el carrito');
        } else {
            setCart([...cart, {...item, quantity}])
            console.log('cart',[...cart,{...item, quantity}])
        }
    };
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const clear = () => {
        setCart([]);
    };

    const removeItem = (productId) => {
        setCart(cart.filter((product)=> product.id != productId));        
    };

    const cartTotal = () => {
        return cart.reduce((acc, item)=> acc += item.price * item.quantity,0)
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem, cartTotal, clear}}>
            {children}
        </CartContext.Provider>
    );

};