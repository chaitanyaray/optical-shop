import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/home/Hero";
import Brands from "../../components/home/Brands";
import Collections from "../../components/home/Collections";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import Stats from "../../components/home/Stats";
import EyeTestCTA from "../../components/home/EyeTestCTA";
import PrescriptionCTA from "../../components/home/PrescriptionCTA";
import Testimonials from "../../components/home/Testimonials";
import FeaturedCategories from "../../components/home/FeaturedCategories";
import LensCollection from "../../components/home/LensCollection";
import FAQ from "../../components/home/FAQ";
const Home = () => {
    return (
        <MainLayout>

            <Hero />

            <FeaturedCategories />

            <FeaturedProducts />

            <LensCollection />

            <EyeTestCTA />

            <Testimonials />

            <FAQ />

        </MainLayout>
    );
};

export default Home;