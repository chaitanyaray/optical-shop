import AdminLayout from "../layouts/AdminLayout";

const AddProduct = () => {
    return (
        <AdminLayout>

            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Add Product
                </h1>
            </div>

            <div className="bg-white rounded-3xl shadow p-6 md:p-8 w-full">

                <form className="space-y-6">

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="block font-medium mb-2">
                                Product Name
                            </label>

                            <input
                                type="text"
                                placeholder="Premium Black Frame"
                                className="w-full border rounded-xl p-4"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-2">
                                Category
                            </label>

                            <select className="w-full border rounded-xl p-4">
                                <option>Eyeglasses</option>
                                <option>Sunglasses</option>
                                <option>Lenses</option>
                                <option>Contact Lenses</option>
                            </select>
                        </div>

                    </div>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div>
                            <label className="block font-medium mb-2">
                                Price
                            </label>

                            <input
                                type="number"
                                placeholder="2999"
                                className="w-full border rounded-xl p-4"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-2">
                                Quantity
                            </label>

                            <input
                                type="number"
                                placeholder="50"
                                className="w-full border rounded-xl p-4"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-2">
                                Brand
                            </label>

                            <input
                                type="text"
                                placeholder="RayBan"
                                className="w-full border rounded-xl p-4"
                            />
                        </div>

                    </div>

                    <div>
                        <label className="block font-medium mb-2">
                            Frame Size
                        </label>

                        <select className="w-full border rounded-xl p-4">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-2">
                            Description
                        </label>

                        <textarea
                            rows="5"
                            className="w-full border rounded-xl p-4"
                            placeholder="Enter product description..."
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-2">
                            Product Image
                        </label>

                        <input
                            type="file"
                            className="w-full border rounded-xl p-4"
                        />
                    </div>

                    <button
                        type="submit"
                        className="
  bg-black
  text-white
  px-8
  py-4
  rounded-xl
  font-semibold
  hover:bg-gray-800
  transition
  w-full md:w-auto
  "
                    >
                        Save Product
                    </button>

                </form>

            </div>

        </AdminLayout>
    );
};

export default AddProduct;