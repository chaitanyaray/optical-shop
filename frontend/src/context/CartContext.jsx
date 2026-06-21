import {
    createContext,
    useContext,
    useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({
    children,
}) => {
    const [cartItems, setCartItems] =
        useState([]);

    const addToCart = (product) => {
        const existingProduct =
            cartItems.find(
                (item) => item.id === product.id
            );

        if (existingProduct) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity:
                                item.quantity + 1,
                        }
                        : item
                )
            );
        } else {
            setCartItems([
                ...cartItems,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    };

    const removeFromCart = (id) => {
        setCartItems(
            cartItems.filter(
                (item) => item.id !== id
            )
        );
    };

    const increaseQuantity = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity:
                            item.quantity + 1,
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(
            cartItems
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity:
                                item.quantity - 1,
                        }
                        : item
                )
                .filter(
                    (item) => item.quantity > 0
                )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartTotal = cartItems.reduce(
        (total, item) =>
            total +
            item.price * item.quantity,
        0
    );

    const cartCount = cartItems.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
                cartTotal,
                cartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () =>
    useContext(CartContext);