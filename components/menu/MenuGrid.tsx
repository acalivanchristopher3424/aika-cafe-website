"use client";

import { useState } from "react";

import CategoryButtons from "./CategoryButtons";
import MenuCard from "./MenuCard";
import { menu } from "@/data/menu";

type Category = "coffee" | "nonCoffee" | "food" | "alcohol";

export default function MenuGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("coffee");

  const drinks = menu[selectedCategory];

  const title =
    selectedCategory === "coffee"
      ? "Coffee"
      : selectedCategory === "nonCoffee"
      ? "Non-Coffee"
      : selectedCategory === "food"
      ? "Food"
      : "Alcohol";

  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <CategoryButtons
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-espresso">
          {title}
        </h2>

        <p className="mt-3 text-stone-600">
          Freshly prepared and carefully crafted for every guest.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {drinks.map((item) => (
          <MenuCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}