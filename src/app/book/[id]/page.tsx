import { notFound } from "next/navigation";
import { BookingForm } from "@/components/marketplace/booking-form";
import { MarketplaceShell } from "@/components/marketplace/marketplace-shell";
import { uiContent } from "@/data/ui";
import { getListingById, formatPrice } from "@/lib/marketplace";

type BookingPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BookingPage({ params }: BookingPageProps) {
  const { id } = await params;
  const listing = getListingById(id);

  if (!listing) {
    notFound();
  }

  return (
    <MarketplaceShell>
      <section className="mx-auto grid w-full max-w-5xl gap-8 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 lg:pt-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">{uiContent.pages.booking.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">{uiContent.pages.booking.titlePrefix} {listing.title}</h1>
          <p className="mt-4 text-sm text-slate-300">{uiContent.pages.booking.description}</p>
          <div className="mt-6 space-y-2 text-sm text-slate-300">
            <p>{uiContent.pages.booking.categoryPrefix} {listing.category}</p>
            <p>{uiContent.pages.booking.locationPrefix} {listing.location}</p>
            <p>{uiContent.pages.booking.pricePrefix} {formatPrice(listing.price)}</p>
          </div>
        </div>
        <BookingForm listingTitle={listing.title} />
      </section>
    </MarketplaceShell>
  );
}
