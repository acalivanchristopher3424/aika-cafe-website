import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function WhatsNewPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold">What's New</h1>

          <p className="mt-4 text-stone-600">
            Featured drinks and promotions are coming soon.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}