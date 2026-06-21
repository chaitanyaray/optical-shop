import { useState } from "react";

const ProductTabs = () => {

    const [activeTab, setActiveTab] =
        useState("description");

    return (

        <div className="mt-20">

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 border-b pb-4">

                <button
                    onClick={() =>
                        setActiveTab("description")
                    }
                    className={`px-5 py-3 rounded-xl font-medium
                    ${activeTab === "description"
                            ? "bg-black text-white"
                            : "bg-gray-100"
                        }`}
                >
                    Description
                </button>

                <button
                    onClick={() =>
                        setActiveTab("lens")
                    }
                    className={`px-5 py-3 rounded-xl font-medium
                    ${activeTab === "lens"
                            ? "bg-black text-white"
                            : "bg-gray-100"
                        }`}
                >
                    Lens Information
                </button>

                <button
                    onClick={() =>
                        setActiveTab("size")
                    }
                    className={`px-5 py-3 rounded-xl font-medium
                    ${activeTab === "size"
                            ? "bg-black text-white"
                            : "bg-gray-100"
                        }`}
                >
                    Size Guide
                </button>

                <button
                    onClick={() =>
                        setActiveTab("shipping")
                    }
                    className={`px-5 py-3 rounded-xl font-medium
                    ${activeTab === "shipping"
                            ? "bg-black text-white"
                            : "bg-gray-100"
                        }`}
                >
                    Shipping
                </button>

                <button
                    onClick={() =>
                        setActiveTab("reviews")
                    }
                    className={`px-5 py-3 rounded-xl font-medium
                    ${activeTab === "reviews"
                            ? "bg-black text-white"
                            : "bg-gray-100"
                        }`}
                >
                    Reviews
                </button>

            </div>

            {/* Content */}
            <div className="mt-8 bg-white rounded-3xl p-6 shadow-sm">

                {activeTab === "description" && (
                    <div>
                        <h3 className="text-xl font-bold">
                            Product Description
                        </h3>

                        <p className="mt-4 text-gray-600">
                            Premium eyewear crafted with
                            lightweight materials and
                            designed for maximum comfort.
                        </p>
                    </div>
                )}

                {activeTab === "lens" && (
                    <div>
                        <h3 className="text-xl font-bold">
                            Lens Information
                        </h3>

                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>• Blue Light Protection</li>
                            <li>• UV Protection</li>
                            <li>• Anti Reflection Coating</li>
                            <li>• Scratch Resistant</li>
                        </ul>
                    </div>
                )}

                {activeTab === "size" && (
                    <div>
                        <h3 className="text-xl font-bold">
                            Frame Size Guide
                        </h3>

                        <p className="mt-4 text-gray-600">
                            Small: 48-50 mm
                        </p>

                        <p className="text-gray-600">
                            Medium: 51-54 mm
                        </p>

                        <p className="text-gray-600">
                            Large: 55+ mm
                        </p>
                    </div>
                )}

                {activeTab === "shipping" && (
                    <div>
                        <h3 className="text-xl font-bold">
                            Shipping & Returns
                        </h3>

                        <p className="mt-4 text-gray-600">
                            Free shipping across India.
                            Easy 7-day return policy.
                        </p>
                    </div>
                )}

                {activeTab === "reviews" && (
                    <div>
                        <h3 className="text-xl font-bold">
                            Customer Reviews
                        </h3>

                        <p className="mt-4 text-gray-600">
                            ⭐⭐⭐⭐⭐ Excellent quality and
                            premium feel.
                        </p>
                    </div>
                )}

            </div>

        </div>
    );
};

export default ProductTabs;