import { AuthForm } from "@/components/marketplace/auth-form";
import { MarketplaceShell } from "@/components/marketplace/marketplace-shell";
import { platformConfig } from "@/data/platform";
import { uiContent } from "@/data/ui";

export default function LoginPage() {
  return (
    <MarketplaceShell>
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <AuthForm
          title={platformConfig.auth.loginTitle}
          subtitle={platformConfig.auth.loginSubtitle}
          submitLabel={uiContent.pages.auth.login.submitLabel}
          secondaryText={uiContent.pages.auth.login.secondaryText}
          secondaryLinkLabel={uiContent.pages.auth.login.secondaryLinkLabel}
          secondaryHref="/register"
        />
      </div>
    </MarketplaceShell>
  );
}
