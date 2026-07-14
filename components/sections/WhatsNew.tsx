export default function WhatsNew() {
  return (
    <section
      id="whats-new"
      className="bg-cream/20 py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-espresso">
            What's New
          </h2>

          <p className="mt-4 text-stone-600">
            Stay updated with our newest drinks, promotions, and announcements.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <article className="rounded-2xl border border-coffee bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-40 items-center justify-center rounded-lg bg-cream/30 text-coffee">
              New Drink
            </div>

            <h3 className="mt-6 text-xl font-bold text-espresso">
              New Seasonal Drink
            </h3>

            <p className="mt-3 text-stone-600">
              Discover our newest handcrafted beverage, available for a limited time.
            </p>
          </article>

          <article className="rounded-2xl border border-coffee bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-40 items-center justify-center rounded-lg bg-cream/30 text-coffee">
              Promotion
            </div>

            <h3 className="mt-6 text-xl font-bold text-espresso">
              Weekend Promo
            </h3>

            <p className="mt-3 text-stone-600">
              Enjoy exclusive weekend offers with your favorite coffee and meals.
            </p>
          </article>

          <article className="rounded-2xl border border-coffee bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-40 items-center justify-center rounded-lg bg-cream/30 text-coffee">
              Announcement
            </div>

            <h3 className="mt-6 text-xl font-bold text-espresso">
              Store Announcement
            </h3>

            <p className="mt-3 text-stone-600">
              Stay informed with our latest updates and upcoming activities.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
}