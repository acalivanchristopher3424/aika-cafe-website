import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedDrinks from "@/components/sections/FeaturedDrinks";
import WhatsNew from "@/components/sections/WhatsNew";
import Events from "@/components/sections/Events";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedDrinks />
      <WhatsNew />
      <Events />
      <Reviews />
      <Footer />
    </>
  );
}