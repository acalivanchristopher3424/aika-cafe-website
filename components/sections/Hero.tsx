export default function Hero() {
  return (
    <section className="relative h-[90vh]">

      {/* Hero Image Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-700 via-stone-800 to-black">

        <div className="text-center text-white">
            <p className="rounded-md border border-white/20 bg-black/20 px-6 py-3 text-lg tracking-widest">
                HERO PHOTO
            </p>

          <p className="mt-2 text-sm opacity-70">
            Replace with cafe photo
          </p>
        </div>

      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">

        {/* <p className="mb-4 uppercase tracking-[0.35em] text-sm">
          Coffee by Day • Pub by Night
        </p>

        <h1 className="text-center text-6xl font-bold md:text-7xl">
          Grounded Cafe & Pub
        </h1>

        <p className="mt-6 text-lg">
          Great coffee. Good food. Better company.
        </p> */}

      </div>

    </section>
  );
}