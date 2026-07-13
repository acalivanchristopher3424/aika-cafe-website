import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CategoryButtons from "@/components/menu/CategoryButtons";
import MenuHero from "@/components/menu/MenuHero";
import MenuGrid from "@/components/menu/MenuGrid";

export default function MenuPage() {
  return (
    <>
      <Navbar />

      <main>
        <MenuHero />
        <MenuGrid />
      </main>

      <Footer />
    </>
  );
}