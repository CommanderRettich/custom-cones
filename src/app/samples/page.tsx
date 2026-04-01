import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Pack from €6.99 — Test All Paper Types & Sizes",
  description: "Order our pre-roll cone sample pack from €6.99. Includes all paper types (Original, Natural, Hemp) and key sizes. Ships within 2 business days across Europe.",
};

export default function SamplesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold md:text-4xl">
        Sample Pack — Test Before You Order
      </h1>
      <p className="mt-4 text-lg text-neutral-600">
        Not sure which cone is right for you? Order our Sample Pack from
        &euro;6.99 — includes all paper types and key sizes, shipped within 2
        business days.
      </p>

      <div className="mt-8 rounded-xl border-2 border-neutral-900 p-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold">Standard Sample Pack</h2>
          <span className="text-3xl font-bold">&euro;6.99</span>
        </div>

        <div className="mt-6 space-y-3 text-sm text-neutral-700">
          <h3 className="font-bold">What&rsquo;s included:</h3>
          <ul className="ml-6 list-disc space-y-1">
            <li>109mm King Size — Original White (3 cones)</li>
            <li>109mm King Size — Natural Brown (3 cones)</li>
            <li>109mm King Size — Hemp (3 cones)</li>
            <li>84mm Small 1&frac14; — Original White (3 cones)</li>
            <li>84mm Small 1&frac14; — Natural Brown (3 cones)</li>
            <li>Product specification card with all SKUs</li>
            <li>Wholesale pricing information</li>
          </ul>
        </div>

        <div className="mt-6 space-y-2 text-sm text-neutral-500">
          <p><strong>Shipping:</strong> 2 business days across EU. International available.</p>
          <p><strong>Purpose:</strong> Evaluate paper quality, burn characteristics, and fill behavior before placing a bulk order.</p>
        </div>

        <button disabled className="mt-6 w-full rounded-xl bg-neutral-900 py-3 font-bold text-white opacity-50">
          Order Sample Pack (Demo — coming soon)
        </button>
      </div>

      <div className="mt-12 space-y-4 text-neutral-700 leading-relaxed">
        <h2 className="text-2xl font-bold">Why Start with Samples?</h2>
        <p>
          Every paper type burns differently. Every size fills differently. The
          only way to know which cone is right for your product is to hold it,
          fill it, and test it. Our sample pack gives you hands-on experience
          with Vandenberg&rsquo;s three core paper types and two most popular
          sizes — for less than the cost of a coffee.
        </p>
        <p>
          For custom branding customers: the sample pack lets you evaluate our
          paper quality before committing to a 10,000+ cone custom order. See
          the paper weight, feel the filter grip, and test the burn — then
          decide on your custom design with confidence.
        </p>
      </div>

      <section className="mt-12 border-t border-neutral-200 pt-8">
        <h2 className="mb-4 text-lg font-bold">Next Steps After Sampling</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/cones/109mm", label: "Order 109mm Bulk" },
            { href: "/cones/84mm", label: "Order 84mm Bulk" },
            { href: "/cones/whitelabel", label: "Start Custom Branding" },
            { href: "/compare/109mm-vs-84mm", label: "Compare Sizes" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600 transition hover:bg-neutral-50">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
