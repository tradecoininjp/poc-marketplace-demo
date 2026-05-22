import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarketplaceShell } from "@/components/marketplace/marketplace-shell";
import { uiContent } from "@/data/ui";
import { getListingById, formatPrice, buildCanonicalUrl } from "@/lib/marketplace";

type ListingDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ListingDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const listing = getListingById(id);

  if (!listing) {
    return {
      title: uiContent.pages.listingDetail.notFound.title,
      description: uiContent.pages.listingDetail.notFound.description,
    };
  }

  return {
    title: `${listing.title} | ${uiContent.pages.listingDetail.metadataTitleSuffix}`,
    description: listing.description,
    alternates: { canonical: buildCanonicalUrl(`/listings/${listing.id}`) },
    openGraph: {
      title: `${listing.title} | Bookly Market`,
      description: listing.description,
      images: [{ url: listing.image, alt: listing.title }],
      url: buildCanonicalUrl(`/listings/${listing.id}`),
      type: "website",
    },
  };
}

export default async function ListingDetailPage({ params }: ListingDetailPageProps) {
  const { id } = await params;
  const listing = getListingById(id);

  if (!listing) {
    notFound();
  }

  return (
    <MarketplaceShell>
      <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
            <div className="relative h-72 w-full sm:h-96">
              <Image src={listing.image} alt={listing.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
            </div>
            <div className="space-y-4 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">{listing.category}</p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{listing.title}</h1>
              <p className="text-base leading-7 text-slate-300">{listing.description}</p>
              <p className="text-sm text-slate-400">{uiContent.pages.listingDetail.locationPrefix} {listing.location}</p>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm text-slate-400">{uiContent.pages.listingDetail.startingFromLabel}</p>
            <p className="mt-2 text-4xl font-semibold text-white">{formatPrice(listing.price)}</p>
            <p className="mt-3 text-sm text-slate-300">{uiContent.pages.listingDetail.sideDescription}</p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={`/book/${listing.id}`}
                className="rounded-xl bg-cyan-400 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {uiContent.pages.listingDetail.cta.bookLabel}
              </Link>
              <Link href="/listings" className="rounded-xl border border-slate-700 px-4 py-2.5 text-center text-sm font-semibold text-slate-100 transition hover:border-slate-500">
                {uiContent.pages.listingDetail.cta.backLabel}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </MarketplaceShell>
  );
}
