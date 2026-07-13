export default function FeaturedDrinks() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">

      <h2 className="mb-10 text-4xl font-bold">
        Featured Drinks
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="flex h-80 items-center justify-center rounded-lg border-2 border-dashed">
          Drink 1
        </div>

        <div className="flex h-80 items-center justify-center rounded-lg border-2 border-dashed">
          Drink 2
        </div>

        <div className="flex h-80 items-center justify-center rounded-lg border-2 border-dashed">
          Drink 3
        </div>

      </div>

    </section>
  );
}