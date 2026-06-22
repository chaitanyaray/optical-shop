import AdminLayout from "../layouts/AdminLayout";

const products = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666",
        name: "Premium Black Frame",
        category: "Eyeglasses",
        price: 2999,
        stock: 25,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        name: "Luxury Sunglasses",
        category: "Sunglasses",
        price: 3499,
        stock: 12,
    },
];

const Products = () => {
    return (
        <AdminLayout>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Products
                </h1>

                <button className="bg-black text-white px-6 py-3 rounded-xl">
                    Add Product
                </button>
            </div>

            <div className="bg-white rounded-3xl shadow overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[800px]">

                        <thead className="bg-gray-100">

                            <tr>
                                <th className="text-left p-4">Image</th>
                                <th className="text-left p-4">Product</th>
                                <th className="text-left p-4">Category</th>
                                <th className="text-left p-4">Price</th>
                                <th className="text-left p-4">Stock</th>
                                <th className="text-left p-4">Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            {products.map((product) => (

                                <tr
                                    key={product.id}
                                    className="border-t"
                                >
                                    <td className="p-4">
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="w-16 h-16 rounded-xl object-cover"
                                        />
                                    </td>

                                    <td className="p-4 font-medium">
                                        {product.name}
                                    </td>

                                    <td className="p-4">
                                        {product.category}
                                    </td>

                                    <td className="p-4">
                                        ₹{product.price}
                                    </td>

                                    <td className="p-4">
                                        {product.stock}
                                    </td>

                                    <td className="p-4 flex gap-2">

                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                            Edit
                                        </button>

                                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                                            Delete
                                        </button>

                                    </td>
                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>
        </AdminLayout>
    );
};

export default Products;