type ReviewCardProps = {
  rating: number;
  review: string;
  author: string;
};

export default function ReviewCard({
  rating,
  review,
  author,
}: ReviewCardProps) {
  return (
    <article className="rounded-2xl border border-coffee bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 text-2xl text-coffee">
        {"★".repeat(rating)}
      </div>

      <p className="italic leading-7 text-stone-600">
        "{review}"
      </p>

      <p className="mt-6 font-semibold text-espresso">
        — {author}
      </p>
    </article>
  );
}