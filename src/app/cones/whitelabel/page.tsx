import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Branded Pre-Rolled Cones — Your Logo, Our Quality Since 1994",
  description: "Full custom branding on cone paper, filter tip, and packaging. Whitelabel pre-rolled cones from Vandenberg — the original manufacturer since 1994. MOQ from 10,000 cones.",
};

export default function WhitelabelPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 pt-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">Home</Link>{" / "}
        <span className="text-neutral-900">Custom Branding</span>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold md:text-4xl">
          Custom Branded Pre-Rolled Cones — Your Logo, Our Quality Since 1994
        </h1>

        <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
          <p>
            Your brand deserves more than a generic cone. With Vandenberg&rsquo;s
            custom branding program, you get the same European manufacturing
            quality we have delivered since 1994 — with your logo, your colors,
            and your brand identity printed directly on every cone.
          </p>
          <p>
            From cigar-band printing to full-coverage custom designs, we brand
            everything that goes into your pre-roll: the cone paper itself, the
            filter tip, and the matching retail packaging. All produced in our
            Rotterdam facility under EU quality standards.
          </p>
        </div>

        {/* Customization Options */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">What Can Be Customized?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cone Paper",
                desc: "Your logo or design printed directly on the rolling paper. Cigar-band style or full coverage. Food-safe ink only.",
              },
              {
                title: "Filter Tip",
                desc: "Brand name, logo, or pattern on the filter tip. Visible to the consumer during use — maximum brand exposure.",
              },
              {
                title: "Packaging",
                desc: "Custom display boxes, blister packs, or bulk packaging. Full CMYK printing with your brand identity.",
              },
            ].map((opt) => (
              <div key={opt.title} className="rounded-xl border border-neutral-200 p-6">
                <h3 className="font-bold">{opt.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">How It Works</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Request a Sample Pack", desc: "Start with our standard sample pack (€6.99) to evaluate paper types, sizes, and quality." },
              { step: "2", title: "Send Your Design", desc: "Share your logo, brand colors, and design vision. Our team creates a proof within 5 business days." },
              { step: "3", title: "Approve & Produce", desc: "Review the proof, request changes if needed. Production starts after approval. 4-6 weeks for first order." },
              { step: "4", title: "Receive & Reorder", desc: "Your custom cones are shipped from Rotterdam. Reorders ship within 2-3 weeks." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MOQ & Pricing */}
        <section className="mt-12 rounded-xl bg-neutral-50 p-8">
          <h2 className="mb-4 text-xl font-bold">Minimum Order & Pricing</h2>
          <div className="space-y-3 text-sm text-neutral-700">
            <p><strong>Minimum Order:</strong> 10,000 cones for custom print</p>
            <p><strong>Available Sizes:</strong> All standard sizes (84mm, 98mm, 109mm, 120mm, 140mm, 180mm, 280mm)</p>
            <p><strong>Available Papers:</strong> Original White, Natural Brown, Hemp</p>
            <p><strong>Lead Time:</strong> 4-6 weeks for first order, 2-3 weeks for reorders</p>
            <p><strong>Proof Turnaround:</strong> 5 business days from design submission</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/samples" className="rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800">
              Start with a Sample Pack
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12 border-t border-neutral-200 pt-8">
          <h2 className="mb-4 text-lg font-bold">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/cones/109mm", label: "109mm King Size Cones" },
              { href: "/cones/84mm", label: "84mm Small 1¼ Cones" },
              { href: "/samples", label: "Sample Pack from €6.99" },
              { href: "/compare/109mm-vs-84mm", label: "109mm vs 84mm Comparison" },
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
