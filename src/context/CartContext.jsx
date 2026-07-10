 import { createContext, useContext, useState} from "react";
 import { useNavigate } from "react-router-dom";
 


const CartContext = createContext(); 

// eslint-disable-next-line react-refresh/only-export-components
export const useCart =() => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}; 

export const CartProvider = ({ children }) => {
    const navigate = useNavigate(); 

        const [cart, setCart] = useState([]);

        const isInCart = (item) => {
            const inCart = cart.some((element) => element.id === item.id);  
            return inCart;
        };



        const addItem = (item) => {
            if (isInCart(item)) { 
                alert ("El producto ya se encuentra en el carrito");
            return;

            
}
             setCart([...cart, item]);
             alert ("Producto agregado al carrito 👌");
              };


              
        const removeItem = (id) => {
            const updatedCart = cart.filter((element) => element.id !== id);
            setCart(updatedCart);
            alert("producto eliminado del carrito  ✔");
        };

              
const getTotalItems = () => {
            return cart.length;
        };

              

              const getCartTotal = () => {
return cart.reduce((acc, element) => acc + element.price, 0); 
              };       
        


        const clearCart = () => {
        setCart([]);
        };
        

  const checkout = () => {
    alert("Su compra ha sido realizada 👍");
    clearCart();
    navigate("/");
  };


            
        const values = { cart, addItem, removeItem, getTotalItems, getCartTotal, clearCart, checkout,}; 
    return <CartContext.Provider value={values}> {children} </CartContext.Provider>;
};