import MainLayout from "../../layouts/MainLayout";
import {
    FaUser,
    FaShoppingBag,
    FaHeart,
    FaEye,
    FaFileMedical,
    FaMapMarkerAlt,
    FaLock,
} from "react-icons/fa";

const Dashboard = () => {
    return (
        <MainLayout>

            <section className="py-12 bg-gray-50 min-h-screen">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid lg:grid-cols-4 gap-8">

                        {/* Sidebar */}
                        <div
                            className="
                            bg-white
                            rounded-3xl
                            shadow-sm
                            p-6
                            h-fit
                            "
                        >

                            <div className="text-center">

                                <div
                                    className="
                                    w-20
                                    h-20
                                    bg-black
                                    text-white
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    mx-auto
                                    text-3xl
                                    "
                                >
                                    C
                                </div>

                                <h3 className="mt-4 font-bold text-xl">
                                    Chaitanya
                                </h3>

                                <p className="text-gray-500">
                                    Customer Account
                                </p>

                            </div>

                            <div className="mt-8 space-y-3">

                                <button className="w-full text-left p-3 rounded-xl hover:bg-gray-100">
                                    <FaUser className="inline mr-3" />
                                    My Profile
                                </button>

                                <button className="w-full text-left p-3 rounded-xl hover:bg-gray-100">
                                    <FaShoppingBag className="inline mr-3" />
                                    Orders
                                </button>

                                <button className="w-full text-left p-3 rounded-xl hover:bg-gray-100">
                                    <FaHeart className="inline mr-3" />
                                    Wishlist
                                </button>

                                <button className="w-full text-left p-3 rounded-xl hover:bg-gray-100">
                                    <FaEye className="inline mr-3" />
                                    Eye Tests
                                </button>

                                <button className="w-full text-left p-3 rounded-xl hover:bg-gray-100">
                                    <FaFileMedical className="inline mr-3" />
                                    Prescriptions
                                </button>

                                <button className="w-full text-left p-3 rounded-xl hover:bg-gray-100">
                                    <FaMapMarkerAlt className="inline mr-3" />
                                    Addresses
                                </button>

                                <button className="w-full text-left p-3 rounded-xl hover:bg-gray-100">
                                    <FaLock className="inline mr-3" />
                                    Change Password
                                </button>

                            </div>

                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">

                            <div
                                className="
                                bg-white
                                rounded-3xl
                                p-8
                                shadow-sm
                                "
                            >

                                <h2 className="text-3xl font-bold">
                                    Welcome Back 👋
                                </h2>

                                <p className="text-gray-500 mt-2">
                                    Manage your orders,
                                    prescriptions and eye tests.
                                </p>

                                {/* Stats */}
                                <div
                                    className="
                                    grid
                                    grid-cols-2
                                    md:grid-cols-4
                                    gap-6
                                    mt-10
                                    "
                                >

                                    <div className="bg-gray-50 rounded-2xl p-5">
                                        <h3 className="text-3xl font-bold">
                                            12
                                        </h3>

                                        <p className="text-gray-500">
                                            Orders
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 rounded-2xl p-5">
                                        <h3 className="text-3xl font-bold">
                                            4
                                        </h3>

                                        <p className="text-gray-500">
                                            Wishlist
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 rounded-2xl p-5">
                                        <h3 className="text-3xl font-bold">
                                            2
                                        </h3>

                                        <p className="text-gray-500">
                                            Eye Tests
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 rounded-2xl p-5">
                                        <h3 className="text-3xl font-bold">
                                            3
                                        </h3>

                                        <p className="text-gray-500">
                                            Prescriptions
                                        </p>
                                    </div>

                                </div>

                            </div>

                            {/* Recent Orders */}
                            <div
                                className="
                                bg-white
                                rounded-3xl
                                p-8
                                shadow-sm
                                mt-8
                                "
                            >

                                <h3 className="text-2xl font-bold">
                                    Recent Orders
                                </h3>

                                <div className="mt-6 overflow-x-auto">

                                    <table className="w-full">

                                        <thead>

                                            <tr className="border-b">

                                                <th className="text-left py-3">
                                                    Order ID
                                                </th>

                                                <th className="text-left py-3">
                                                    Product
                                                </th>

                                                <th className="text-left py-3">
                                                    Status
                                                </th>

                                                <th className="text-left py-3">
                                                    Amount
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            <tr>

                                                <td className="py-4">
                                                    #OH1234
                                                </td>

                                                <td>
                                                    Premium Frame
                                                </td>

                                                <td>
                                                    Delivered
                                                </td>

                                                <td>
                                                    ₹3,999
                                                </td>

                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </MainLayout>
    );
};

export default Dashboard;