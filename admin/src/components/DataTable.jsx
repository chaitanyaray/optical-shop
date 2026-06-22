const products = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1577803645773-f96470509666",
        name: "Premium Black Frame",
        category: "Eyeglasses",
        price: 2999,
        stock: 25,
        status: "Active",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        name: "Luxury Sunglasses",
        category: "Sunglasses",
        price: 3499,
        stock: 12,
        status: "Active",
    },
];

const DataTable = () => {
    return (
        <div className="bg-white rounded-3xl shadow overflow-hidden">

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 text-left">Image</th>
                            <th className="p-4 text-left">Product</th>
                            <th className="p-4 text-left">Category</th>
                            <th className="p-4 text-left">Price</th>
                            <th className="p-4 text-left">Stock</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left">Actions</th>
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
                                        alt={product.name}
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

                                <td className="p-4">
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                        {product.status}
                                    </span>
                                </td>

                                <td className="p-4">
                                    <div className="flex gap-2">

                                        <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">
                                            Edit
                                        </button>

                                        <button className="bg-red-500 text-white px-3 py-2 rounded-lg">
                                            Delete
                                        </button>

                                    </div>
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default DataTable;