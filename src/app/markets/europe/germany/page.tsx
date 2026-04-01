import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-Rolled Cones for the German Cannabis Market — EU Quality Since 1994",
  description: "Buy pre-rolled cones for the German market. EU-manufactured, no import duties, 2-4 business days delivery. Compliance documentation for Social Clubs available.",
};

export default function GermanyPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 pt-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">Home</Link>
        {" / Markets / Europe / "}
        <span className="text-neutral-900">Germany</span>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold md:text-4xl">
          Pre-Rolled Cones for the German Cannabis Market — EU Quality Since 1994
        </h1>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">The German Market</h2>
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <p>
              Germany legalized personal cannabis possession and cultivation in
              April 2024 — a historic step for the largest EU market. With 84
              million inhabitants and an already established CBD industry, Germany
              has the potential to become the most important European cannabis
              market of the next decade.
            </p>
            <p>
              The current legal framework allows Cannabis Social Clubs (CSCs) with
              up to 500 members to collectively grow and distribute cannabis. For
              pre-roll producers, this means: the demand for professional
              pre-rolled cones from EU production is already present and growing
              monthly.
            </p>
            <p>
              <strong>EU Import Advantage:</strong> Pre-Rolled Cones from
              Vandenberg Special Products B.V. (Rotterdam, NL) are EU goods — no
              customs, no import declarations, no delays. Delivery within 2-4
              business days across Germany.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">Compliance &amp; Legal</h2>
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <p>
              All Vandenberg Cones meet EU food-contact material standards. The
              papers are chlorine-free bleached or unbleached, free of pesticides
              and heavy metals within EU food regulation limits. For German Social
              Clubs needing to demonstrate material compliance to authorities, we
              provide complete batch certificates on request.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">Recommended Products for German Clubs &amp; Brands</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: "109mm Original Standard", use: "Standard joints for club distribution" },
              { name: "84mm Small 1¼ (5-pack)", use: "Multi-pack format for club members" },
              { name: "Hemp Paper 109mm", use: "Bio-positioning for organic-minded clubs" },
              { name: "Blister Pack 3er", use: "Retail-ready packaging for club sales" },
              { name: "Custom Branding", use: "Club-branded cones with your logo" },
            ].map((p) => (
              <div key={p.name} className="rounded-lg border border-neutral-200 p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-500">{p.use}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-xl bg-neutral-50 p-8 text-center">
          <h2 className="text-xl font-bold">Ready to supply your German operation?</h2>
          <p className="mt-2 text-neutral-600">
            EU goods. No customs. 2-4 business days delivery. Sample pack from &euro;6.99.
          </p>
          <Link href="/samples" className="mt-6 inline-block rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800">
            Order Sample Pack
          </Link>
        </section>
      </article>
    </div>
  );
}
