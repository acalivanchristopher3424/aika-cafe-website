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
    <article className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      <div className="flex h-64 items-center justify-center bg-stone-200 text-stone-500">
        Image Placeholder
      </div>

      <div className="space-y-3 p-6">
        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <p className="text-sm leading-6 text-stone-600">
          {description}
        </p>

        <p className="text-lg font-semibold text-stone-900">
          {price}
        </p>
      </div>

    </article>
  );
}