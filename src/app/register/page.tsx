import { AuthForm } from "@/components/marketplace/auth-form";
import { MarketplaceShell } from "@/components/marketplace/marketplace-shell";
import { platformConfig } from "@/data/platform";
import { uiContent } from "@/data/ui";

export default function RegisterPage() {
  return (
    <MarketplaceShell>
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <AuthForm
          title={platformConfig.auth.registerTitle}
          subtitle={platformConfig.auth.registerSubtitle}
          submitLabel={uiContent.pages.auth.register.submitLabel}
          secondaryText={uiContent.pages.auth.register.secondaryText}
          secondaryLinkLabel={uiContent.pages.auth.register.secondaryLinkLabel}
          secondaryHref="/login"
          includeBusinessName
        />
      </div>
    </MarketplaceShell>
  );
}
