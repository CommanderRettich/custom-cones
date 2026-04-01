import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "109mm vs 84mm Pre-Rolled Cones — Which Size Is Right for Your Product?",
  description: "Detailed comparison of 109mm King Size vs 84mm Small 1¼ pre-rolled cones. Fill weight, market data, consumer perception, and production efficiency compared.",
};

export default function Compare109vs84Page() {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://custom-cones.com/" },
          { name: "Compare", url: "https://custom-cones.com/compare/" },
          { name: "109mm vs 84mm" },
        ])}
      />

      <div className="mx-auto max-w-4xl px-4 pt-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">Home</Link>
        {" / Compare / "}
        <span className="text-neutral-900">109mm vs 84mm</span>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold md:text-4xl">
          109mm vs 84mm Pre-Rolled Cones — Which Size Is Right for Your Product?
        </h1>

        <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
          <p>
            Choosing between the 109mm King Size and the 84mm Small 1&frac14; is
            one of the most common decisions facing cannabis producers and
            retailers. Both sizes are available in all three paper types —
            Original white, Natural brown, and Hemp — and both are fully
            compatible with our filling devices. But they serve very different
            purposes, price points, and consumer preferences.
          </p>
          <p>
            In this guide, we break down every dimension of the comparison: fill
            weight, consumer perception, retail pricing implications, production
            efficiency, and which size dominates in key cannabis markets —
            including data from Germany, the Netherlands, the US and Canada.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-neutral-50 text-xs text-neutral-500">
                <th className="px-4 py-3">Factor</th>
                <th className="px-4 py-3">109mm King Size</th>
                <th className="px-4 py-3">84mm Small 1&frac14;</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Total Length", "109mm", "84mm"],
                ["Fill Weight", "≈ 0.9–1.1g", "≈ 0.5–0.6g"],
                ["Filter Length (Standard)", "20mm", "26mm"],
                ["Pieces per Box", "1,000 (Std) / 800 (De Luxe)", "900"],
                ["Best Use Case", "Full session, retail single, 1g products", "Multi-packs, tasting, sampling, 5-packs"],
                ["Consumer Perception", "'Full joint', satisfying, classic format", "'Mini', premium tasting, less overwhelming"],
                ["German Market", "#1 selling size", "#2, dominant in multi-pack format"],
                ["Canadian Market", "49% of units sold (1g range)", "37% of units (0.5g range)"],
                ["US Market", "#1 for single units", "#1 for 5-pack multi-packs (2.5g total)"],
                ["Filling Machine Compat.", "100% — all devices", "100% — all devices"],
                ["Paper Types Available", "Original · Natural · Hemp", "Original · Natural · Hemp"],
              ].map(([factor, ks, sm]) => (
                <tr key={factor} className="border-b">
                  <td className="px-4 py-3 font-medium">{factor}</td>
                  <td className="px-4 py-3">{ks}</td>
                  <td className="px-4 py-3">{sm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Market Data */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">Market Data — What the Numbers Say</h2>
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <p>
              According to Headset data from the US pre-roll market, full-gram
              (approximately 109mm) pre-rolls account for approximately 57% of
              consumer purchases by unit count. The 5-pack of 0.5g (approximately
              84mm) pre-rolls, totaling 2.5g, is the single best-selling product
              format in dispensaries across most US states — suggesting that while
              consumers buy 1g single units, they increasingly prefer to buy
              multiple smaller units in a pack.
            </p>
            <p>
              In Canada, Headset data confirms that 49% of pre-roll units sold
              are in the 1g weight class, making the 109mm the dominant
              single-unit format. However, the 5-pack (typically featuring 84mm
              half-gram cones) has grown from 12% to over 35% of total sales
              volume between 2022 and 2025 — suggesting the same multi-pack trend
              seen in the US is now firmly established in Canada.
            </p>
            <p>
              For European markets: Germany, which legalized personal cannabis
              possession in April 2024, is seeing early dispensary and social club
              product lines emerge primarily in 1g (109mm) format for single
              sales, but industry observers expect multi-pack 84mm formats to
              follow the North American pattern within 24 months.
            </p>
          </div>
        </section>

        {/* Recommendation */}
        <section className="mt-12 rounded-xl bg-neutral-50 p-8">
          <h2 className="mb-4 text-xl font-bold">Our Recommendation</h2>
          <p className="text-neutral-700 leading-relaxed">
            If you are launching a single pre-roll SKU, choose{" "}
            <strong>109mm Original White with De Luxe 26mm filter</strong>. If
            you are building a multi-pack product (5-pack, 10-pack), the{" "}
            <strong>84mm in all three paper types</strong> gives you the right
            gram weight, better margins, and a more accessible entry price for
            consumers.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/samples"
              className="rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800"
            >
              Order Sample Pack from &euro;6.99
            </Link>
            <Link
              href="/cones/109mm"
              className="rounded-lg border border-neutral-300 px-6 py-2.5 text-sm font-medium transition hover:bg-neutral-50"
            >
              View 109mm Cones
            </Link>
            <Link
              href="/cones/84mm"
              className="rounded-lg border border-neutral-300 px-6 py-2.5 text-sm font-medium transition hover:bg-neutral-50"
            >
              View 84mm Cones
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="mt-12 border-t border-neutral-200 pt-8">
          <h2 className="mb-4 text-lg font-bold">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/compare/white-vs-brown-paper", label: "White vs Brown Paper" },
              { href: "/blog/size-guide", label: "Complete Size Guide" },
              { href: "/cones/whitelabel", label: "Custom Branded Cones" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600 transition hover:bg-neutral-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
