import MainLayout from "../../layouts/MainLayout";
import {
    FaBox,
    FaTruck,
    FaCheckCircle,
    FaFileInvoice,
} from "react-icons/fa";

const Orders = () => {

    const orders = [
        {
            id: "OH12345",
            date: "15 June 2026",
            product: "Luxury Black Frame",
            amount: 2999,
            payment: "Paid",
            status: "Delivered",
        },
        {
            id: "OH12346",
            date: "18 June 2026",
            product: "Premium Sunglasses",
            amount: 3999,
            payment: "Paid",
            status: "Shipping",
        },
    ];

    return (
        <MainLayout>

            <section className="py-12 bg-gray-50 min-h-screen">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="mb-10">

                        <h1 className="text-4xl font-bold">
                            My Orders
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Track and manage your purchases.
                        </p>

                    </div>

                    {orders.length === 0 ? (

                        <div className="bg-white rounded-3xl p-12 text-center">

                            <FaBox
                                size={60}
                                className="mx-auto text-gray-400"
                            />

                            <h2 className="text-2xl font-bold mt-6">
                                No Orders Yet
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Your order history will appear here.
                            </p>

                        </div>

                    ) : (

                        <div className="space-y-6">

                            {orders.map((order) => (

                                <div
                                    key={order.id}
                                    className="
                                    bg-white
                                    rounded-3xl
                                    p-6
                                    shadow-sm
                                    hover:shadow-lg
                                    transition
                                    "
                                >

                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                                        {/* Left */}
                                        <div>

                                            <h3 className="text-xl font-bold">
                                                Order #{order.id}
                                            </h3>

                                            <p className="text-gray-500 mt-1">
                                                {order.date}
                                            </p>

                                            <p className="mt-3 font-medium">
                                                {order.product}
                                            </p>

                                        </div>

                                        {/* Middle */}
                                        <div>

                                            <p className="text-gray-500">
                                                Amount
                                            </p>

                                            <h3 className="text-2xl font-bold">
                                                ₹{order.amount}
                                            </h3>

                                        </div>

                                        {/* Payment */}
                                        <div>

                                            <p className="text-gray-500">
                                                Payment
                                            </p>

                                            <span
                                                className="
                                                inline-block
                                                mt-1
                                                px-4
                                                py-2
                                                bg-green-100
                                                text-green-700
                                                rounded-full
                                                text-sm
                                                "
                                            >
                                                {order.payment}
                                            </span>

                                        </div>

                                        {/* Status */}
                                        <div>

                                            <p className="text-gray-500">
                                                Status
                                            </p>

                                            <span
                                                className="
                                                inline-flex
                                                items-center
                                                gap-2
                                                mt-1
                                                px-4
                                                py-2
                                                bg-yellow-100
                                                text-yellow-700
                                                rounded-full
                                                text-sm
                                                "
                                            >

                                                {order.status === "Delivered" ? (
                                                    <FaCheckCircle />
                                                ) : (
                                                    <FaTruck />
                                                )}

                                                {order.status}

                                            </span>

                                        </div>

                                    </div>

                                    {/* Buttons */}

                                    <div className="flex flex-col sm:flex-row gap-4 mt-6">

                                        <button
                                            className="
                                            bg-black
                                            text-white
                                            px-6
                                            py-4
                                            rounded-xl
                                            "
                                        >
                                            Track Order
                                        </button>

                                        <button
                                            className="
                                            border
                                            px-6
                                            py-4
                                            rounded-xl
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            "
                                        >
                                            <FaFileInvoice />

                                            Download Invoice
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </section>

        </MainLayout>
    );
};

export default Orders;