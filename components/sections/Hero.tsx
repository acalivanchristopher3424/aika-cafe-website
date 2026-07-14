export default function Hero() {
  return (
    <section className="relative h-[90vh]">

      {/* Hero Image Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-espresso">

        <div className="text-center">
          <div className="rounded-xl border-2 border-dashed border-cream px-12 py-16">
            <p className="text-xl font-semibold tracking-[0.25em] text-cream">
              HERO PHOTO
            </p>

            <p className="mt-4 text-sm text-cream/70">
              Replace with cafe photo
            </p>
          </div>
        </div>

      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Future Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        {/* Hero text will go here later */}
      </div>

    </section>
  );
}