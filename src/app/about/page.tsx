import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vandenberg Cones — The Inventors of the Pre-Rolled Cone Since 1994",
  description: "The story of Vandenberg Special Products B.V. — the company that invented the pre-rolled cone in 1994 in Rotterdam, Netherlands. 30+ years of European manufacturing excellence.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
          <p className="mb-4 text-sm tracking-widest text-neutral-400">
            ROTTERDAM, NETHERLANDS — SINCE 1994
          </p>
          <h1 className="text-3xl font-bold md:text-5xl">
            The Inventors of the Pre-Rolled Cone
          </h1>
          <p className="mt-6 text-lg text-neutral-400">
            Vandenberg Special Products B.V. brought the first industrially
            manufactured pre-rolled cone to market in 1994 — more than 30 years
            before &ldquo;pre-roll&rdquo; became a billion-dollar market.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <section className="space-y-4 text-neutral-700 leading-relaxed">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p>
            In 1994, two brothers in Rotterdam saw something nobody else did:
            rolling a perfect cone by hand is a skill, but manufacturing one at
            scale is engineering. They founded Vandenberg Special Products B.V.
            and developed the first industrially manufactured pre-rolled cone —
            paper tubes perfectly shaped for filling, with an integrated filter
            tip and consistent geometry.
          </p>
          <p>
            At the time, the concept was ahead of its market. Rolling papers
            dominated. The word &ldquo;pre-roll&rdquo; did not exist in commercial
            vocabulary. But the product solved a real problem: consistent,
            efficient, high-quality cone production at scale.
          </p>
          <p>
            Today, the company is headquartered in Rotterdam with its central
            warehouse and logistics hub right there in the Netherlands. Production
            happens in Indonesia — combining European quality control and
            R&amp;D with large-scale manufacturing capacity. Every batch is
            tested and certified before it reaches the Rotterdam warehouse for
            distribution across Europe and worldwide.
          </p>
          <p>
            Over three decades, as cannabis legalization spread from the
            Netherlands to North America to the rest of Europe, the pre-rolled
            cone became the backbone of a multi-billion dollar industry. And at
            its foundation was — and remains — the technology the Vandenberg
            brothers developed in Rotterdam in 1994.
          </p>
        </section>

        {/* Timeline */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Timeline</h2>
          <div className="space-y-6 border-l-2 border-neutral-200 pl-6">
            {[
              { year: "1994", event: "Vandenberg Special Products B.V. founded in Rotterdam. First industrially manufactured pre-rolled cone produced." },
              { year: "2000s", event: "Expansion across European coffeeshop markets. Netherlands, Germany, Spain become key markets." },
              { year: "2010s", event: "North American cannabis legalization begins. Pre-roll category explodes. Vandenberg technology becomes the global standard." },
              { year: "2017", event: "Custom Cones USA founded — 23 years after Vandenberg. US market catches up to European innovation." },
              { year: "2024", event: "Germany legalizes cannabis. Largest EU market opens. European manufacturing advantage becomes decisive." },
              { year: "2025+", event: "custom-cones.com launches — bringing 30 years of manufacturing expertise directly to brands, producers, and retailers worldwide." },
            ].map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-9 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">
                  &#8226;
                </div>
                <p className="font-bold">{item.year}</p>
                <p className="mt-1 text-sm text-neutral-600">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why It Matters */}
        <section className="mt-12 rounded-xl bg-neutral-50 p-8">
          <h2 className="mb-4 text-xl font-bold">Why History Matters for Quality</h2>
          <p className="text-neutral-700 leading-relaxed">
            30 years of manufacturing means 30 years of paper sourcing
            relationships, production optimization, and quality control
            refinement. Every batch of Vandenberg cones benefits from three
            decades of cumulative knowledge — from paper weight calibration to
            filter adhesion testing to humidity-controlled storage. This is not
            something that can be replicated by a company founded in 2017 or
            2020, no matter how much capital they raise.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold">Experience the difference</h2>
          <p className="mt-2 text-neutral-500">
            30 years of quality in every cone. Try it yourself.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/samples" className="rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800">
              Sample Pack — &euro;6.99
            </Link>
            <Link href="/cones/109mm" className="rounded-lg border border-neutral-300 px-6 py-2.5 text-sm font-medium transition hover:bg-neutral-50">
              View Products
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
