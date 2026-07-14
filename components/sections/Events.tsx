export default function Events() {
  return (
    <section
      id="events"
      className="bg-[#F7F1E8] py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold text-[#3E2814]">
            Upcoming Events
          </h2>

          <p className="mt-4 text-lg text-stone-600">
            Join us for live music, special nights, and community events.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Event 1 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">

            <div className="flex h-56 items-center justify-center bg-[#D0B392]">
              Event Photo
            </div>

            <div className="p-6">

              <p className="text-sm font-semibold uppercase tracking-wider text-[#986E31]">
                Friday • 8:00 PM
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#3E2814]">
                Acoustic Night
              </h3>

              <p className="mt-4 text-stone-600">
                Relax with live acoustic performances while enjoying coffee,
                cocktails and good food.
              </p>

            </div>

          </div>

          {/* Event 2 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">

            <div className="flex h-56 items-center justify-center bg-[#D0B392]">
              Event Photo
            </div>

            <div className="p-6">

              <p className="text-sm font-semibold uppercase tracking-wider text-[#986E31]">
                Saturday • 9:00 PM
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#3E2814]">
                DJ Night
              </h3>

              <p className="mt-4 text-stone-600">
                Enjoy great music, drinks and an unforgettable Saturday night.
              </p>

            </div>

          </div>

          {/* Event 3 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">

            <div className="flex h-56 items-center justify-center bg-[#D0B392]">
              Event Photo
            </div>

            <div className="p-6">

              <p className="text-sm font-semibold uppercase tracking-wider text-[#986E31]">
                Sunday • All Day
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#3E2814]">
                Family Day
              </h3>

              <p className="mt-4 text-stone-600">
                Bring your family and enjoy special food and drink promotions.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}