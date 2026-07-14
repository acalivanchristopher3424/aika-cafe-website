export default function FeaturedDrinks() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-espresso">
          Featured Drinks
        </h2>

        <p className="mt-4 text-stone-600">
          Our signature drinks that everyone loves.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="overflow-hidden rounded-2xl border border-coffee bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex h-72 items-center justify-center bg-cream/20 text-coffee">
            Drink Photo
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-espresso">
              Featured Drink
            </h3>

            <p className="mt-2 text-sm text-stone-600">
              Description goes here.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-coffee bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex h-72 items-center justify-center bg-cream/20 text-coffee">
            Drink Photo
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-espresso">
              Featured Drink
            </h3>

            <p className="mt-2 text-sm text-stone-600">
              Description goes here.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-coffee bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex h-72 items-center justify-center bg-cream/20 text-coffee">
            Drink Photo
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-espresso">
              Featured Drink
            </h3>

            <p className="mt-2 text-sm text-stone-600">
              Description goes here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}