import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd, productSchema, faqSchema, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "109mm King Size Pre-Rolled Cones — Buy in Bulk from Europe's Original Manufacturer",
  description:
    "109mm pre-rolled cones from Vandenberg — the original manufacturer since 1994. 1 gram fill capacity, 1000 pcs per box. Original, Natural & Hemp paper. No minimum order. Fast EU shipping.",
};

const faqs = [
  {
    question: "What is the fill weight of a 109mm pre-rolled cone?",
    answer: "A 109mm cone holds approximately 0.9 to 1.1 grams of ground cannabis or tobacco substitute, depending on grind consistency and packing density. For regulatory labeling in EU markets, most producers label these as '1 gram pre-rolls.'",
  },
  {
    question: "Are these cones compatible with all filling machines?",
    answer: "Yes. The 109mm King Size is the most universally compatible cone size. It works with all Vandenberg filling devices, all third-party cone fillers, and all automated pre-roll machines currently on the market.",
  },
  {
    question: "What is the difference between Standard (20mm filter) and De Luxe (26mm filter)?",
    answer: "The filter length affects the effective smoking area and the 'bite' of the filter in the mouth. The 26mm De Luxe filter provides a larger, more comfortable grip and is preferred in premium retail packaging. The 20mm standard is the production workhorse, with 1,000 pieces per box vs 800 for De Luxe.",
  },
  {
    question: "Can I order with custom branding?",
    answer: "Yes. We offer full custom branding on the cone paper, filter tip, and matching packaging. Minimum order quantities start at 10,000 cones for custom print. Request a custom sample first via our Sample Pack page.",
  },
  {
    question: "What is the minimum order for bulk 109mm cones?",
    answer: "No minimum order for standard bulk. You can order from 1 box (1,000 pieces Original, 800 pieces De Luxe/Hemp). Master Carton pricing is available from 4 boxes. Contact us for pallet pricing.",
  },
];

export default function Cones109Page() {
  return (
    <div>
      <JsonLd
        data={productSchema({
          name: "109mm Original King Size Pre-Rolled Cones — Bulk 1,000 pcs",
          description: "109mm white paper pre-rolled cones, 1,000 pieces per bulk box, 20mm filter tip. Manufactured by Vandenberg Cones since 1994. Art. 010-0001.",
          sku: "010-0001",
          url: "https://custom-cones.com/cones/109mm/",
          image: "https://custom-cones.com/images/109mm-original-bulk.jpg",
          category: "Pre-Rolled Cones / 109mm King Size",
          material: "Refined white rolling paper",
          properties: [
            { name: "Length", value: "109mm" },
            { name: "Filter Length", value: "20mm" },
            { name: "Fill Weight", value: "approx. 1g" },
            { name: "Pieces per Box", value: "1000" },
            { name: "Paper Type", value: "Refined White" },
          ],
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://custom-cones.com/" },
          { name: "Pre-Rolled Cones", url: "https://custom-cones.com/cones/" },
          { name: "109mm King Size" },
        ])}
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-4xl px-4 pt-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">Home</Link>
        {" / "}
        <span>Pre-Rolled Cones</span>
        {" / "}
        <span className="text-neutral-900">109mm King Size</span>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold md:text-4xl">
          109mm King Size Pre-Rolled Cones — Buy in Bulk from Europe&rsquo;s Original Manufacturer
        </h1>

        <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
          <p>
            The 109mm pre-rolled cone is the global standard for the cannabis
            industry — and for good reason. At 1 gram fill capacity with a 20mm
            or 26mm filter tip, the 109mm King Size cone delivers the perfect
            balance of size, burn time, and efficiency. Developed and perfected
            by Vandenberg Cones since 1994, this is the cone that set the
            industry standard before the word &ldquo;pre-roll&rdquo; was widely
            known.
          </p>
          <p>
            Whether you are filling by hand or running automated production with
            our filling machines, the 109mm cone is compatible with every filling
            device we offer — and virtually every other machine on the market.
            Available in three paper types: refined white Original, natural brown
            Natural, and 100% organic Hemp paper.
          </p>
        </div>
      </section>

      {/* Specs Table */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h2 className="mb-4 text-2xl font-bold">Technical Specifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-neutral-50 text-xs text-neutral-500">
                <th className="px-4 py-3">Specification</th>
                <th className="px-4 py-3">Standard (20mm filter)</th>
                <th className="px-4 py-3">De Luxe (26mm filter)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Total Length", "109mm", "109mm"],
                ["Filter Length", "20mm", "26mm"],
                ["Fill Weight", "≈ 0.9–1.1g", "≈ 0.9–1.1g"],
                ["Pieces per Box", "1,000 pcs", "800 pcs"],
                ["Boxes per Master Carton", "4", "4"],
                ["Available Papers", "Original · Natural · Hemp", "Original · Natural · Hemp"],
                ["Format", "Bulk Refill", "Bulk Refill"],
                ["Art. Code (Original)", "010-0001", "010-0007"],
                ["Art. Code (Natural)", "010-0012", "010-0013"],
                ["Art. Code (Hemp)", "010-0212", "010-0213"],
              ].map(([spec, std, dlx]) => (
                <tr key={spec} className="border-b">
                  <td className="px-4 py-3 font-medium">{spec}</td>
                  <td className="px-4 py-3">{std}</td>
                  <td className="px-4 py-3">{dlx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why 109mm */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h2 className="mb-4 text-2xl font-bold">
          Why the 109mm is the World&rsquo;s Best-Selling Pre-Rolled Cone
        </h2>
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>
            The 109mm cone became the de-facto standard because it hits the sweet
            spot for both producers and consumers. At approximately 1 gram, it is
            the unit size that most retail cannabis products are priced and
            marketed around — making the 109mm not just a product choice, but a
            business standard.
          </p>
          <p>
            For producers, the 109mm offers the highest efficiency: 1,000 cones
            per bulk box means low storage overhead, and the cone&rsquo;s geometry
            fills consistently whether you use a hand filling unit, a Cool Box
            device (120 cones per run), or a fully automated line. For consumers,
            the 109mm provides a satisfying session without being excessive —
            typically lasting 10–15 minutes depending on packing density.
          </p>
        </div>
      </section>

      {/* Paper Types */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h2 className="mb-4 text-2xl font-bold">
          Paper Types for 109mm Cones — Which to Choose?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-neutral-50 text-xs text-neutral-500">
                <th className="px-4 py-3">Property</th>
                <th className="px-4 py-3">Original (White)</th>
                <th className="px-4 py-3">Natural (Brown)</th>
                <th className="px-4 py-3">Hemp</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Taste", "Neutral, clean", "Slight earthy note", "Very neutral, pure"],
                ["Burn Speed", "Moderate", "Slightly slower", "Slowest, most even"],
                ["Chlorine-Free?", "Yes", "Yes", "Yes"],
                ["Best For", "Classic joints, mainstream retail", "Craft cannabis brands", "Premium & organic brands"],
                ["Paper Thickness", "Ultra-thin", "Ultra-thin", "Ultra-thin"],
                ["Consumer Trend", "Most popular", "Growing rapidly", "Fastest growing segment"],
              ].map(([prop, orig, nat, hemp]) => (
                <tr key={prop} className="border-b">
                  <td className="px-4 py-3 font-medium">{prop}</td>
                  <td className="px-4 py-3">{orig}</td>
                  <td className="px-4 py-3">{nat}</td>
                  <td className="px-4 py-3">{hemp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Filling Guide */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h2 className="mb-4 text-2xl font-bold">
          Filling Guide — How to Fill a 109mm Cone
        </h2>
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>
            Filling a 109mm cone correctly ensures a consistent burn and a great
            consumer experience. Here is what works best:
          </p>
          <ol className="ml-6 list-decimal space-y-3">
            <li>
              <strong>GRIND:</strong> Use a medium grind — not too fine (clogs
              the cone), not too coarse (loose pack, uneven burn). If using a
              Vandenberg Cones Grinder, the Black/Yellow model is calibrated for
              109mm cones.
            </li>
            <li>
              <strong>FILL:</strong> Spoon or pour your ground material into the
              cone opening. Tap gently on a flat surface to settle. For bulk
              production, use our Hand Filling Unit 109mm (36 cones per run) or
              the Cool Box KS 109mm (120 cones per run).
            </li>
            <li>
              <strong>PACK:</strong> Use a packing tool or the included tamper
              to compress the fill evenly. Do not over-pack — this restricts
              airflow. Target: light resistance when drawing.
            </li>
            <li>
              <strong>CLOSE:</strong> Twist or fold the open end. For
              production, the Cool Box device handles closing automatically for
              120 cones in one operation.
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h2 className="mb-6 text-2xl font-bold">
          Frequently Asked Questions — 109mm Cones
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-bold">{faq.question}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Links */}
      <section className="mx-auto max-w-4xl px-4 py-8 border-t border-neutral-200">
        <h2 className="mb-4 text-lg font-bold">See Also</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/compare/109mm-vs-84mm", label: "109mm vs 84mm Comparison" },
            { href: "/compare/white-vs-brown-paper", label: "Paper Type Guide" },
            { href: "/cones/whitelabel", label: "Custom 109mm Cones" },
            { href: "/samples", label: "Sample Pack from €6.99" },
            { href: "/blog/size-guide", label: "Complete Size Guide" },
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

      {/* CTA */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center">
          <h2 className="text-2xl font-bold">Ready to order 109mm cones?</h2>
          <p className="mt-2 text-neutral-400">
            No minimum order. Sample pack from &euro;6.99. Wholesale pricing from
            4 boxes.
          </p>
          <Link
            href="/samples"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-3 font-bold text-neutral-900 transition hover:bg-neutral-100"
          >
            Order Sample Pack
          </Link>
        </div>
      </section>
    </div>
  );
}
