type MenuCardProps = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function MenuCard({
  name,
  description,
  price,
}: MenuCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-coffee bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Placeholder Image */}
      <div className="flex h-64 items-center justify-center bg-cream/30 text-coffee">
        Image Placeholder
      </div>

      {/* Content */}
      <div className="space-y-3 p-6">
        <h3 className="text-2xl font-bold text-espresso">
          {name}
        </h3>

        <p className="text-sm leading-6 text-stone-600">
          {description}
        </p>

        <p className="text-lg font-bold text-coffee">
          {price}
        </p>
      </div>

    </article>
  );
}