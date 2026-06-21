import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import products from "../../data/products";
import ProductCard from "../../components/common/ProductCard";
import ShopFilters from "../../components/shop/ShopFilters";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  let filteredProducts = [...products];

  filteredProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <MainLayout>
      <section className="py-12 md:py-16">

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Premium Hero */}

          <section className="bg-black text-white rounded-[40px] p-8 md:p-16 mb-12">

            <div className="text-center">

              <span className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold">
                Premium Collection
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-6">
                Luxury Eyewear
              </h1>

              <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
                Discover premium frames, advanced lenses and contact lenses
                crafted for comfort, clarity and style.
              </p>

              <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mt-10">

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                    25K+
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Customers
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                    500+
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Frames
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                    15+
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Years
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* Filters */}

          <ShopFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />

          {/* Products */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>
    </MainLayout>
  );
};

export default Shop;