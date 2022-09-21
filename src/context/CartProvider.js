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
    const removeItem = (productId) => {
        let newarray = [];
         cart.forEach((product) => {
            if (product.id === productId){
               console.log(product);
            } else {
                newarray.push(product);
            }
        });
        setCart(newarray);        
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    );

};