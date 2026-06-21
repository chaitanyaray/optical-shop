import MainLayout from "../../layouts/MainLayout";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartTotal,
    } = useCart();

    const shippingCharge = 0;

    return (
        <MainLayout>

            <section className="py-16">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <h1 className="text-3xl md:text-5xl font-bold mb-10">
                        Shopping Cart
                    </h1>

                    {cartItems.length === 0 ? (
                        <div className="text-center py-20">

                            <h2 className="text-2xl font-semibold">
                                Your Cart Is Empty
                            </h2>

                            <Link
                                to="/shop"
                                className="
                inline-block
                mt-6
                bg-black
                text-white
                px-8
                py-4
                rounded-full
                "
                            >
                                Continue Shopping
                            </Link>

                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-10">

                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-6">

                                {cartItems.map((item) => (

                                    <div
                                        key={item.id}
                                        className="
                    bg-white
                    rounded-3xl
                    shadow-md
                    p-5
                    flex
                    flex-col
                    md:flex-row
                    gap-5
                    "
                                    >

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="
                      w-full
                      md:w-40
                      h-40
                      object-cover
                      rounded-2xl
                      "
                                        />

                                        <div className="flex-1">

                                            <h3 className="text-xl font-semibold">
                                                {item.name}
                                            </h3>

                                            <p className="mt-2 text-gray-600">
                                                Premium Optical Collection
                                            </p>

                                            <p className="mt-3 font-bold text-lg">
                                                ₹{item.price}
                                            </p>

                                            {/* Quantity */}
                                            <div className="flex items-center gap-3 mt-5">

                                                <button
                                                    onClick={() =>
                                                        decreaseQuantity(item.id)
                                                    }
                                                    className="
                          w-10
                          h-10
                          rounded-full
                          bg-gray-200
                          "
                                                >
                                                    -
                                                </button>

                                                <span className="font-bold">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        increaseQuantity(item.id)
                                                    }
                                                    className="
                          w-10
                          h-10
                          rounded-full
                          bg-gray-200
                          "
                                                >
                                                    +
                                                </button>

                                            </div>

                                        </div>

                                        <div className="flex flex-col justify-between">

                                            <button
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                                className="
                        text-red-500
                        font-medium
                        "
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                ))}

                            </div>

                            {/* Summary */}
                            <div>

                                <div
                                    className="
                  bg-gray-50
                  rounded-3xl
                  p-6
                  sticky
                  top-24
                  "
                                >

                                    <h2 className="text-2xl font-bold">
                                        Order Summary
                                    </h2>

                                    {/* Coupon */}
                                    <div className="mt-6">

                                        <input
                                            type="text"
                                            placeholder="Coupon Code"
                                            className="
                      w-full
                      border
                      p-3
                      rounded-xl
                      "
                                        />

                                    </div>

                                    <div className="space-y-4 mt-6">

                                        <div className="flex justify-between">
                                            <span>Subtotal</span>
                                            <span>₹{cartTotal}</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>Shipping</span>
                                            <span>Free</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>Discount</span>
                                            <span>₹0</span>
                                        </div>

                                        <hr />

                                        <div className="flex justify-between text-xl font-bold">

                                            <span>Total</span>

                                            <span>
                                                ₹{cartTotal + shippingCharge}
                                            </span>

                                        </div>

                                    </div>

                                    <div
                                        className="
                    mt-6
                    p-4
                    rounded-2xl
                    bg-green-50
                    "
                                    >

                                        <p className="text-sm text-green-700">
                                            Estimated Delivery:
                                            3-5 Business Days
                                        </p>

                                    </div>

                                    <Link
                                        to="/checkout"
                                        className="
                    block
                    text-center
                    mt-8
                    bg-black
                    text-white
                    py-4
                    rounded-full
                    font-semibold
                    "
                                    >
                                        Proceed To Checkout
                                    </Link>

                                </div>

                            </div>

                        </div>
                    )}

                </div>

            </section>

        </MainLayout>
    );
};

export default Cart;