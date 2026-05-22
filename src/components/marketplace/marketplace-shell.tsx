import Link from "next/link";
import { platformConfig } from "@/data/platform";
import { uiContent } from "@/data/ui";

type MarketplaceShellProps = {
  children: React.ReactNode;
};

export function MarketplaceShell({ children }: MarketplaceShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            <span className="text-base font-semibold tracking-tight sm:text-lg">{platformConfig.name}</span>
          </Link>

          <details className="md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-200">
              {uiContent.shell.menuLabel}
            </summary>
            <div className="absolute right-4 top-16 z-40 flex w-56 flex-col gap-1 rounded-xl border border-slate-800 bg-slate-900 p-2 shadow-lg sm:right-6">
              {platformConfig.navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800">
                  {item.label}
                </Link>
              ))}
              <Link href="/listings" className="rounded-lg px-3 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-slate-800">
                {uiContent.shell.browseLabel}
              </Link>
            </div>
          </details>

          <nav className="hidden items-center gap-6 md:flex">
            {platformConfig.navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/listings"
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {uiContent.shell.browseLabel}
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{platformConfig.description}</p>
          <p>© {new Date().getFullYear()} {platformConfig.name}. {uiContent.shell.footerSuffix}</p>
        </div>
      </footer>
    </div>
  );
}
