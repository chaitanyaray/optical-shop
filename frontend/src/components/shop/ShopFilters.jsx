import React from "react";

const ShopFilters = ({
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
}) => {

    const categories = [
        "All",
        "Eyeglasses",
        "Sunglasses",
        "Lenses",
        "Contact Lenses",
    ];

    return (
        <div className="mb-12">

            {/* Search + Sort */}

            <div className="bg-white rounded-3xl shadow-md p-6 mb-8">

                <div className="grid md:grid-cols-2 gap-4">

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="border p-4 rounded-xl"
                    />

                    <select
                        value={sort}
                        onChange={(e) =>
                            setSort(e.target.value)
                        }
                        className="border p-4 rounded-xl"
                    >
                        <option value="featured">
                            Featured
                        </option>

                        <option value="low">
                            Price Low To High
                        </option>

                        <option value="high">
                            Price High To Low
                        </option>

                    </select>

                </div>

            </div>

            {/* Category Pills */}

            <div className="flex flex-wrap justify-center gap-3">

                {categories.map((item) => (

                    <button
                        key={item}
                        onClick={() =>
                            setCategory(item)
                        }
                        className={`
              px-6
              py-3
              rounded-full
              font-medium
              transition

              ${category === item
                                ? "bg-black text-white"
                                : "bg-white border border-gray-300"
                            }
            `}
                    >
                        {item}
                    </button>

                ))}

            </div>

        </div>
    );
};

export default ShopFilters;