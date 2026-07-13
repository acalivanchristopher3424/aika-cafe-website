"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";
import { menu } from "@/data/menu";
import CategoryButtons from "./CategoryButtons";

type Category = "coffee" | "nonCoffee" | "food" | "alcohol";

export default function MenuGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("coffee");

  const drinks = menu[selectedCategory];

  return (
    <section className="mx-auto max-w-7xl px-8 pb-20">
        <CategoryButtons
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        />

      <h2 className="mb-8 text-3xl font-bold">
        {selectedCategory === "coffee"
          ? "Coffee"
          : selectedCategory === "nonCoffee"
          ? "Non-Coffee"
          : selectedCategory === "food"
          ? "Food"
          : "Alcohol"}
      </h2>

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