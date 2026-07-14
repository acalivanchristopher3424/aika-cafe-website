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
        {categories.map((category) => {
          const isActive = selectedCategory === category.value;

          return (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`rounded-full border px-6 py-3 font-medium transition duration-300 ${
                isActive
                  ? "border-coffee bg-coffee text-white"
                  : "border-coffee bg-white text-espresso hover:bg-coffee hover:text-white"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}