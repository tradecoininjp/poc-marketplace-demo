"use client";

import { uiContent } from "@/data/ui";

type ListingFiltersProps = {
  categories: string[];
  query: string;
  category: string;
  resultCount: number;
  totalCount: number;
  onQueryChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
};

export function ListingFilters({
  categories,
  query,
  category,
  resultCount,
  totalCount,
  onQueryChange,
  onCategoryChange,
}: ListingFiltersProps) {
  const activeCategory = category === "All" ? uiContent.listingFilters.allCategoriesLabel : category;
  const statusText = `${uiContent.listingFilters.statusPrefix} ${activeCategory}${query ? `${uiContent.listingFilters.statusKeywordPrefix} "${query}"` : ""}.`;
  const countText = `${resultCount}/${totalCount} ${uiContent.listingFilters.resultsSuffix}`;

  return (
    <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          {uiContent.listingFilters.searchLabel}
          <input
            type="text"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={uiContent.listingFilters.searchPlaceholder}
            className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          {uiContent.listingFilters.categoryLabel}
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-slate-400">{statusText}</p>
        <p className="text-xs text-slate-500">{countText}</p>
      </div>
    </div>
  );
}
