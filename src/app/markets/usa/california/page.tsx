import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-Rolled Cones for the California Cannabis Market — European Quality, Worldwide Shipping",
  description: "Pre-rolled cones for California cannabis brands. European manufacturing quality since 1994. Phase III compliance documentation. Custom branding from 10,000 cones.",
};

export default function CaliforniaPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 pt-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">Home</Link>
        {" / Markets / USA / "}
        <span className="text-neutral-900">California</span>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold md:text-4xl">
          Pre-Rolled Cones for the California Cannabis Market
        </h1>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">The California Pre-Roll Market</h2>
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <p>
              California is the world&rsquo;s largest single cannabis market and
              the birthplace of the modern pre-roll. With monthly pre-roll sales
              exceeding $240 million in tracked markets, California sets the
              trends that the rest of North America and increasingly Europe
              follow.
            </p>
            <p>
              The California pre-roll market is defined by intense competition,
              premium consumer expectations, and strict compliance requirements.
              The state&rsquo;s Phase III compliance standards — which test for
              pesticides, heavy metals, residual solvents, and microbials — are
              among the most stringent in the world.
            </p>
            <p>
              Key trends: Infused pre-rolls now account for over 46% of
              California pre-roll sales — the highest concentration in any US
              state. Glass tip pre-rolled cones are growing fastest in the premium
              segment, with the average infused pre-roll retailing at $19.20.
              Multi-packs (5-pack, 10-pack) dominate shelf presence at California
              dispensaries.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">Why California Brands Choose European Manufacturers</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Quality", desc: "EU food-contact material regulations align with California's Phase III requirements. Vandenberg has been testing for heavy metals and pesticides since before the US market existed." },
              { title: "Customization", desc: "Deeper customization options with lower MOQs than most US suppliers. OEM/whitelabel history since 1994." },
              { title: "Cost", desc: "For large brands ordering 500,000+ cones per quarter, European bulk pricing combined with the USD/EUR exchange rate creates meaningful cost advantages." },
              { title: "Compliance", desc: "Comprehensive batch testing documentation that satisfies California BCC requirements." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-neutral-200 p-6">
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-xl bg-neutral-50 p-8">
          <h2 className="mb-4 text-xl font-bold">Popular Products for California</h2>
          <ul className="ml-6 list-disc space-y-2 text-neutral-700">
            <li>109mm Original De Luxe (26mm filter) — premium single-unit format</li>
            <li>Hemp Paper 109mm — organic credentials for California&rsquo;s premium segment</li>
            <li>Custom Branded Cones with Cigar Band — shelf presence matters in California</li>
          </ul>
          <p className="mt-4 text-sm text-neutral-500">
            Shipping from Rotterdam to California ports: 14-21 business days sea freight. Air freight available for rush orders.
          </p>
          <Link href="/samples" className="mt-6 inline-block rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800">
            Request Samples
          </Link>
        </section>
      </article>
    </div>
  );
}
