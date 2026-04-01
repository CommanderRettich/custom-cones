import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd, productSchema, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "84mm Small 1¼ Pre-Rolled Cones — The Multi-Pack Standard",
  description: "84mm pre-rolled cones from Vandenberg since 1994. 0.5g fill capacity, perfect for 5-packs and tasting sets. Original, Natural & Hemp paper. No minimum order.",
};

export default function Cones84Page() {
  return (
    <div>
      <JsonLd
        data={productSchema({
          name: "84mm Small 1¼ Pre-Rolled Cones — Bulk 900 pcs",
          description: "84mm small 1¼ pre-rolled cones, 900 pieces per bulk box. Manufactured by Vandenberg Cones since 1994.",
          sku: "010-0003",
          url: "https://custom-cones.com/cones/84mm/",
          image: "https://custom-cones.com/images/84mm-original-bulk.jpg",
          category: "Pre-Rolled Cones / 84mm Small 1¼",
          material: "Refined white rolling paper",
          properties: [
            { name: "Length", value: "84mm" },
            { name: "Filter Length", value: "26mm" },
            { name: "Fill Weight", value: "approx. 0.5g" },
            { name: "Pieces per Box", value: "900" },
          ],
        })}
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://custom-cones.com/" },
        { name: "Pre-Rolled Cones", url: "https://custom-cones.com/cones/" },
        { name: "84mm Small 1¼" },
      ])} />

      <div className="mx-auto max-w-4xl px-4 pt-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">Home</Link>{" / Pre-Rolled Cones / "}
        <span className="text-neutral-900">84mm Small 1&frac14;</span>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold md:text-4xl">
          84mm Small 1&frac14; Pre-Rolled Cones — The 0.5g Allrounder
        </h1>

        <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
          <p>
            The 84mm Small 1&frac14; is the second most popular cone format
            worldwide and the dominant format for multi-pack products. At
            approximately 0.5 grams fill capacity, it is the natural choice for
            5-packs, tasting sets, and entry-level retail offerings.
          </p>
          <p>
            In North America, the 5-pack of 0.5g pre-rolls (typically using 84mm
            cones) is the single best-selling product format in dispensaries. For
            European markets entering the legal cannabis space, the 84mm format
            represents an opportunity to follow proven North American packaging
            strategies from day one.
          </p>
          <p>
            Available in all three paper types — Original white, Natural brown,
            and 100% organic Hemp — with 900 pieces per bulk box. Compatible
            with all manual and automated filling devices.
          </p>
        </div>

        {/* Specs */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <tbody>
                {[
                  ["Total Length", "84mm"],
                  ["Filter Length", "26mm"],
                  ["Fill Weight", "≈ 0.5–0.6g"],
                  ["Pieces per Box", "900 pcs"],
                  ["Boxes per Master Carton", "4"],
                  ["Available Papers", "Original · Natural · Hemp"],
                  ["Best For", "Multi-packs, tasting sets, sampling campaigns"],
                ].map(([spec, val]) => (
                  <tr key={spec} className="border-b">
                    <td className="px-4 py-3 font-medium">{spec}</td>
                    <td className="px-4 py-3">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 rounded-xl bg-neutral-50 p-8">
          <h2 className="mb-4 text-xl font-bold">When to choose 84mm over 109mm</h2>
          <ul className="ml-6 list-disc space-y-2 text-neutral-700">
            <li>You are building a multi-pack product (5-pack, 10-pack)</li>
            <li>Your target consumer prefers a shorter session (5-8 minutes)</li>
            <li>You want a lower per-unit price point for retail</li>
            <li>You are running tasting events or sampling campaigns</li>
            <li>Your market data shows growing demand for 0.5g formats</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/samples" className="rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800">
              Order Sample Pack
            </Link>
            <Link href="/compare/109mm-vs-84mm" className="rounded-lg border border-neutral-300 px-6 py-2.5 text-sm font-medium transition hover:bg-neutral-50">
              Compare 109mm vs 84mm
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
