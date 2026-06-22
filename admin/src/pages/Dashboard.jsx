import AdminLayout from "../layouts/AdminLayout";

const Dashboard = () => {
    return (
        <AdminLayout>
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
                Dashboard
            </h1>

            <div
                className="
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-4
    gap-4
    md:gap-6
    "
            >
                <div className="bg-white p-6 rounded-3xl shadow">
                    <h3 className="text-gray-500">
                        Total Products
                    </h3>
                    <p className="text-3xl font-bold mt-2">
                        150
                    </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow">
                    <h3 className="text-gray-500">
                        Orders
                    </h3>
                    <p className="text-3xl font-bold mt-2">
                        320
                    </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow">
                    <h3 className="text-gray-500">
                        Revenue
                    </h3>
                    <p className="text-3xl font-bold mt-2">
                        ₹4.5L
                    </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow">
                    <h3 className="text-gray-500">
                        Eye Tests
                    </h3>
                    <p className="text-3xl font-bold mt-2">
                        89
                    </p>
                </div>

            </div>
        </AdminLayout>
    );
};

export default Dashboard;