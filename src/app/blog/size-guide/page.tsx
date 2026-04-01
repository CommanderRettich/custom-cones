import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-Roll Cone Size Guide — From 70mm Mini to 280mm Giga",
  description: "The complete guide to pre-rolled cone sizes. Compare 70mm, 84mm, 98mm, 109mm, 120mm, 140mm, 180mm, and 280mm cones. Fill weight, use cases, and market data.",
};

export default function SizeGuidePage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 pt-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">Home</Link>
        {" / Blog / "}
        <span className="text-neutral-900">Size Guide</span>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold md:text-4xl">
          Pre-Roll Cone Size Guide — Which Size Fits Your Product?
        </h1>

        <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
          <p>
            Choosing the right cone size is the most important product decision
            you will make. It determines fill weight, consumer perception, retail
            price point, and production efficiency. This guide covers every
            standard size from 70mm mini cones to 280mm giga cones — with market
            data, use cases, and recommendations for each.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-neutral-50 text-xs text-neutral-500">
                <th className="px-4 py-3">Size</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Fill Weight</th>
                <th className="px-4 py-3">Best For</th>
                <th className="px-4 py-3">Market Share</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["70mm", "Mini / Dog Walker", "≈ 0.3g", "Micro-dose, events, giveaways", "~5%"],
                ["84mm", "Small 1¼", "≈ 0.5g", "Multi-packs, tasting, sampling", "~25%"],
                ["98mm", "Standard", "≈ 0.75g", "Compact single, mid-size", "~8%"],
                ["109mm", "King Size", "≈ 1.0g", "Standard single, retail, dispensary", "~45%"],
                ["120mm", "Bomb Size", "≈ 1.2g", "Premium single, special format", "~7%"],
                ["140mm", "Party Size", "≈ 1.5g", "Sharing, sessions, events", "~5%"],
                ["180mm", "Super Sized", "≈ 2.0g", "Novelty, special occasions", "~3%"],
                ["280mm", "Giga", "≈ 5.0g", "Statement piece, display, events", "~2%"],
              ].map(([size, name, fill, use, share]) => (
                <tr key={size} className="border-b">
                  <td className="px-4 py-3 font-bold">{size}</td>
                  <td className="px-4 py-3">{name}</td>
                  <td className="px-4 py-3">{fill}</td>
                  <td className="px-4 py-3">{use}</td>
                  <td className="px-4 py-3">{share}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">The Two Sizes That Matter Most</h2>
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <p>
              While all sizes serve valid purposes, <strong>109mm</strong> and
              <strong> 84mm</strong> together account for roughly 70% of global
              pre-roll cone sales. If you are launching a new pre-roll line,
              start with these two sizes and expand from there based on consumer
              response.
            </p>
            <p>
              The 109mm is the undisputed standard for single-unit retail. The
              84mm is the standard for multi-pack products. Together, they cover
              almost every use case in the dispensary channel.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-xl bg-neutral-50 p-8 text-center">
          <h2 className="text-xl font-bold">Still unsure?</h2>
          <p className="mt-2 text-neutral-600">
            Our sample pack includes both 109mm and 84mm in all paper types — so
            you can decide with product in hand.
          </p>
          <Link href="/samples" className="mt-6 inline-block rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800">
            Order Sample Pack — &euro;6.99
          </Link>
        </section>

        <section className="mt-12 border-t border-neutral-200 pt-8">
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/cones/109mm", label: "109mm King Size" },
              { href: "/cones/84mm", label: "84mm Small 1¼" },
              { href: "/compare/109mm-vs-84mm", label: "109mm vs 84mm" },
              { href: "/compare/white-vs-brown-paper", label: "Paper Guide" },
              { href: "/cones/whitelabel", label: "Custom Branding" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600 transition hover:bg-neutral-50">
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
