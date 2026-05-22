import { ListingsExplorer } from "@/components/marketplace/listings-explorer";
import { MarketplaceShell } from "@/components/marketplace/marketplace-shell";
import { SectionHeading } from "@/components/marketplace/section-heading";
import { listings } from "@/data/listings";
import { platformConfig } from "@/data/platform";
import { uiContent } from "@/data/ui";

export default function ListingsPage() {
  return (
    <MarketplaceShell>
      <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <SectionHeading
          eyebrow={uiContent.pages.listings.heading.eyebrow}
          title={uiContent.pages.listings.heading.title}
          subtitle={uiContent.pages.listings.heading.subtitle}
        />
        <div className="mt-7">
          <ListingsExplorer items={listings} categories={platformConfig.categories} />
        </div>
      </section>
    </MarketplaceShell>
  );
}
