import Link from "next/link";
import { ListingCard } from "@/components/marketplace/listing-card";
import { MarketplaceShell } from "@/components/marketplace/marketplace-shell";
import { SectionHeading } from "@/components/marketplace/section-heading";
import { platformConfig } from "@/data/platform";
import { uiContent } from "@/data/ui";
import { getFeaturedListings } from "@/lib/marketplace";

export default function Home() {
  const featuredListings = getFeaturedListings(3);

  return (
    <MarketplaceShell>
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">{platformConfig.hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {platformConfig.hero.title}
          </h1>
          <p className="mt-5 text-lg text-slate-300">{platformConfig.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={platformConfig.hero.primaryCtaHref}
              className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {platformConfig.hero.primaryCtaLabel}
            </Link>
            <Link
              href={platformConfig.hero.secondaryCtaHref}
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
            >
              {platformConfig.hero.secondaryCtaLabel}
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">{uiContent.pages.home.whyEyebrow}</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {platformConfig.listingHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={uiContent.pages.home.featured.eyebrow}
          title={uiContent.pages.home.featured.title}
          subtitle={uiContent.pages.home.featured.subtitle}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </MarketplaceShell>
  );
}
