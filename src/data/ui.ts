export const uiContent = {
  shell: {
    browseLabel: "Browse",
    menuLabel: "Menu",
    footerSuffix: "All rights reserved.",
  },
  listingCard: {
    viewDetailsLabel: "View Details",
  },
  listingFilters: {
    searchLabel: "Search listings",
    searchPlaceholder: "Try: yoga, cleaning, plumbing",
    categoryLabel: "Category",
    allCategoriesLabel: "all categories",
    statusPrefix: "UI-only filters active:",
    statusKeywordPrefix: ", keyword",
    resultsSuffix: "results",
    emptyState: "No listings match the current filters. Try another keyword or category.",
  },
  bookingForm: {
    successEyebrow: "Booking Confirmed",
    successTitle: "Your request has been submitted",
    successDescriptionPrefix: "A provider from",
    successDescriptionSuffix: "will contact you shortly. This is a mock success state for the MVP flow.",
    fields: {
      fullName: "Full name",
      email: "Email",
      preferredDate: "Preferred date",
      notes: "Notes",
    },
    placeholders: {
      fullName: "Jane Smith",
      email: "jane@email.com",
      notes: "Share any preferences or context",
    },
    submitLabel: "Submit Booking Request",
  },
  authForm: {
    labels: {
      email: "Email",
      password: "Password",
      businessName: "Business name",
    },
    placeholders: {
      email: "founder@business.com",
      password: "********",
      businessName: "Your Business LLC",
    },
  },
  dashboard: {
    changeSuffix: "vs last month",
    columns: {
      listing: "Listing",
      category: "Category",
      location: "Location",
      price: "Price",
      action: "Action",
    },
    viewAction: "View",
  },
  pages: {
    home: {
      whyEyebrow: "Why teams use this MVP",
      featured: {
        eyebrow: "Featured Listings",
        title: "Preview trusted service providers",
        subtitle: "A quick look at high-demand listings powered by mock marketplace data.",
      },
    },
    listings: {
      heading: {
        eyebrow: "Listings",
        title: "Find a provider that fits your needs",
        subtitle: "Browse service providers, compare pricing, and move to booking quickly.",
      },
    },
    listingDetail: {
      notFound: {
        title: "Listing Not Found",
        description: "The requested listing does not exist.",
      },
      metadataTitleSuffix: "Bookly Market",
      locationPrefix: "Location:",
      startingFromLabel: "Starting from",
      sideDescription: "Transparent pricing and quick booking flow with no backend dependencies.",
      cta: {
        bookLabel: "Book this service",
        backLabel: "Back to listings",
      },
    },
    booking: {
      eyebrow: "Booking",
      titlePrefix: "Book",
      description: "Complete this mock booking form to preview the full conversion journey.",
      categoryPrefix: "Category:",
      locationPrefix: "Location:",
      pricePrefix: "Starting price:",
    },
    auth: {
      login: {
        submitLabel: "Sign In",
        secondaryText: "No account yet?",
        secondaryLinkLabel: "Register",
      },
      register: {
        submitLabel: "Create Account",
        secondaryText: "Already have an account?",
        secondaryLinkLabel: "Login",
      },
    },
    admin: {
      heading: {
        eyebrow: "Admin Dashboard",
        title: "Marketplace performance snapshot",
        subtitle: "Mock analytics and listing management UI ready for backend integration.",
      },
    },
  },
};
