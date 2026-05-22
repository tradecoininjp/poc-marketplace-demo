"use client";

import { useMemo, useState } from "react";
import { ListingCard } from "@/components/marketplace/listing-card";
import { ListingFilters } from "@/components/marketplace/listing-filters";
import { uiContent } from "@/data/ui";
import type { Listing } from "@/types/marketplace";

type ListingsExplorerProps = {
  items: Listing[];
  categories: string[];
};

export function ListingsExplorer({ items, categories }: ListingsExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(categories[0] ?? "All");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery) ||
        item.location.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, items, query]);

  return (
    <>
      <ListingFilters
        categories={categories}
        query={query}
        category={category}
        resultCount={filteredItems.length}
        totalCount={items.length}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
      />

      {filteredItems.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-300">
          {uiContent.listingFilters.emptyState}
        </div>
      )}
    </>
  );
}
