import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import products from "../../data/products";
import ProductTabs from "../../components/product/ProductTabs";
import RelatedProducts from "../../components/product/RelatedProducts";
const ProductDetails = () => {
    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    return (
        <MainLayout>

            <section className="py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        <ProductGallery product={product} />

                        <ProductInfo product={product} />

                    </div>
                    <ProductTabs />
                    <RelatedProducts currentProductId={product.id} />

                </div>

            </section>

        </MainLayout>
    );
};

export default ProductDetails;