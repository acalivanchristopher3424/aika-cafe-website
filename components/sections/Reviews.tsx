import ReviewCard from "@/components/reviews/ReviewCard";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section
        id="reviews"
        className="bg-cream/20 py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-espresso">
            What Our Guests Say
          </h2>

          <p className="mt-4 text-stone-600">
            Hear what our customers have to say about their experience at Grounded Cafe & Pub.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              rating={review.rating}
              review={review.review}
              author={review.author}
            />
          ))}
        </div>

      </div>
    </section>
  );
}