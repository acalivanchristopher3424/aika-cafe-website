type Category = "coffee" | "nonCoffee" | "food" | "alcohol";

type CategoryButtonsProps = {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
};

const categories = [
  { label: "Coffee", value: "coffee" },
  { label: "Non-Coffee", value: "nonCoffee" },
  { label: "Food", value: "food" },
  { label: "Alcohol", value: "alcohol" },
] as const;

export default function CategoryButtons({
  selectedCategory,
  onCategoryChange,
}: CategoryButtonsProps) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`rounded-full border px-6 py-3 transition ${
              selectedCategory === category.value
                ? "bg-neutral-900 text-white"
                : "border-stone-300 bg-white hover:bg-stone-900 hover:text-white"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </section>
  );
}