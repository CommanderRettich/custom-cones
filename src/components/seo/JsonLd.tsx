interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function productSchema({
  name,
  description,
  sku,
  url,
  image,
  category,
  material,
  properties,
}: {
  name: string;
  description: string;
  sku: string;
  url: string;
  image: string;
  category: string;
  material: string;
  properties: { name: string; value: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: {
      "@type": "Brand",
      name: "Vandenberg Cones",
      foundingDate: "1994",
    },
    sku,
    mpn: sku,
    category,
    material,
    url,
    image,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "custom-cones.com" },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: ["DE", "AT", "CH", "NL", "BE", "FR", "ES", "IT", "PL"],
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          businessDays: { minValue: 2, maxValue: 5 },
        },
      },
    },
    additionalProperty: properties.map((p) => ({
      "@type": "PropertyValue",
      name: p.name,
      value: p.value,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "custom-cones.com — Vandenberg Cones",
  url: "https://custom-cones.com",
  foundingDate: "1994",
  founder: {
    "@type": "Organization",
    name: "Vandenberg Special Products B.V.",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
    addressLocality: "Rotterdam",
  },
  description:
    "Original manufacturer of pre-rolled cones since 1994. Wholesale supplier for cannabis brands, dispensaries and producers across Europe and worldwide.",
};
