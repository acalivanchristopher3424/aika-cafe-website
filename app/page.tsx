import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FeaturedDrinks from "@/components/sections/FeaturedDrinks";
import Hero from "@/components/sections/Hero";
import PromoUpdates from "@/components/sections/PromoUpdates";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedDrinks />
      <PromoUpdates />
      <Footer />
    </>
  );
}