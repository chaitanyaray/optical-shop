import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
    const { cartItems, cartTotal } =
        useCart();

    const [paymentMethod, setPaymentMethod] =
        useState("cod");

    return (
        <MainLayout>

            <section className="py-16">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <h1 className="text-3xl md:text-5xl font-bold mb-10">
                        Checkout
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* Left Side */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Contact Information */}
                            <div className="bg-white rounded-3xl shadow-md p-6">

                                <h2 className="text-2xl font-bold mb-6">
                                    Contact Information
                                </h2>

                                <div className="grid md:grid-cols-2 gap-5">

                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="border p-4 rounded-xl"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="border p-4 rounded-xl"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="border p-4 rounded-xl md:col-span-2"
                                    />

                                </div>

                            </div>

                            {/* Shipping Address */}
                            <div className="bg-white rounded-3xl shadow-md p-6">

                                <h2 className="text-2xl font-bold mb-6">
                                    Shipping Address
                                </h2>

                                <div className="grid md:grid-cols-2 gap-5">

                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="border p-4 rounded-xl"
                                    />

                                    <input
                                        type="text"
                                        placeholder="State"
                                        className="border p-4 rounded-xl"
                                    />

                                    <input
                                        type="text"
                                        placeholder="PIN Code"
                                        className="border p-4 rounded-xl"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Country"
                                        className="border p-4 rounded-xl"
                                    />

                                    <textarea
                                        rows="4"
                                        placeholder="Full Address"
                                        className="border p-4 rounded-xl md:col-span-2"
                                    />

                                </div>

                            </div>

                            {/* Prescription */}
                            <div className="bg-white rounded-3xl shadow-md p-6">

                                <h2 className="text-2xl font-bold mb-6">
                                    Prescription Information
                                </h2>

                                <label
                                    className="
                  flex
                  items-center
                  justify-center
                  border-2
                  border-dashed
                  rounded-2xl
                  p-8
                  cursor-pointer
                  "
                                >

                                    Upload Prescription

                                    <input
                                        type="file"
                                        className="hidden"
                                    />

                                </label>

                            </div>

                            {/* Payment */}
                            <div className="bg-white rounded-3xl shadow-md p-6">

                                <h2 className="text-2xl font-bold mb-6">
                                    Payment Method
                                </h2>

                                <div className="space-y-4">

                                    <label className="flex gap-3">

                                        <input
                                            type="radio"
                                            checked={
                                                paymentMethod === "cod"
                                            }
                                            onChange={() =>
                                                setPaymentMethod("cod")
                                            }
                                        />

                                        Cash On Delivery

                                    </label>

                                    <label className="flex gap-3">

                                        <input
                                            type="radio"
                                            checked={
                                                paymentMethod === "upi"
                                            }
                                            onChange={() =>
                                                setPaymentMethod("upi")
                                            }
                                        />

                                        UPI Payment

                                    </label>

                                    <label className="flex gap-3">

                                        <input
                                            type="radio"
                                            checked={
                                                paymentMethod === "card"
                                            }
                                            onChange={() =>
                                                setPaymentMethod("card")
                                            }
                                        />

                                        Credit / Debit Card

                                    </label>

                                </div>

                            </div>

                        </div>

                        {/* Right Side */}
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

                                <h2 className="text-2xl font-bold mb-6">
                                    Order Summary
                                </h2>

                                <div className="space-y-5">

                                    {cartItems.map((item) => (

                                        <div
                                            key={item.id}
                                            className="flex justify-between"
                                        >

                                            <div>

                                                <p className="font-medium">
                                                    {item.name}
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    Qty:
                                                    {item.quantity}
                                                </p>

                                            </div>

                                            <p>
                                                ₹
                                                {item.price *
                                                    item.quantity}
                                            </p>

                                        </div>

                                    ))}

                                </div>

                                <hr className="my-6" />

                                <div className="space-y-4">

                                    <div className="flex justify-between">

                                        <span>
                                            Subtotal
                                        </span>

                                        <span>
                                            ₹{cartTotal}
                                        </span>

                                    </div>

                                    <div className="flex justify-between">

                                        <span>
                                            Shipping
                                        </span>

                                        <span>
                                            Free
                                        </span>

                                    </div>

                                    <div className="flex justify-between text-xl font-bold">

                                        <span>
                                            Total
                                        </span>

                                        <span>
                                            ₹{cartTotal}
                                        </span>

                                    </div>

                                </div>

                                <button
                                    className="
                  w-full
                  mt-8
                  bg-black
                  text-white
                  py-4
                  rounded-full
                  font-semibold
                  "
                                >
                                    Place Order
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </MainLayout>
    );
};

export default Checkout;