import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
    const autoCart = useContext(CartContext);
    return autoCart;
}

export const CartProvider = (props) => {
    const [item, Updateitem] = useState([]);
    return (
    <CartContext.Provider value={{item, Updateitem}}>
        {props.children}
    </CartContext.Provider>
    );
}