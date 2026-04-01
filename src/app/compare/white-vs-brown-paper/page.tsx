import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White vs Brown Paper Cones — Original vs Natural Paper Comparison",
  description: "Compare white (bleached) vs brown (unbleached) pre-rolled cone paper. Taste, burn speed, consumer trends, and which paper type fits your brand.",
};

export default function WhiteVsBrownPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 pt-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">Home</Link>
        {" / Compare / "}
        <span className="text-neutral-900">White vs Brown Paper</span>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold md:text-4xl">
          White vs Brown Paper Cones — Which Is Right for Your Brand?
        </h1>

        <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
          <p>
            The choice between white (Original) and brown (Natural) cone paper is
            one of the first decisions any cannabis brand makes when selecting
            pre-rolled cones. Both are ultra-thin, chlorine-free, and manufactured
            to the same European quality standards — but they appeal to different
            consumer segments and brand positionings.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-neutral-50 text-xs text-neutral-500">
                <th className="px-4 py-3">Property</th>
                <th className="px-4 py-3">Original (White)</th>
                <th className="px-4 py-3">Natural (Brown)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Appearance", "Clean white, classic look", "Earthy brown, craft aesthetic"],
                ["Taste", "Neutral, very clean", "Slight earthy note"],
                ["Burn Speed", "Moderate, even", "Slightly slower"],
                ["Chlorine-Free", "Yes", "Yes"],
                ["Consumer Perception", "Mainstream, familiar", "Craft, natural, premium"],
                ["Best Brand Fit", "Mass market, classic positioning", "Organic, artisanal, health-conscious"],
                ["Market Trend", "Still most popular by volume", "Growing rapidly, especially in premium"],
                ["Custom Print Quality", "Excellent contrast for dark logos", "Natural background, earthy aesthetic"],
              ].map(([prop, white, brown]) => (
                <tr key={prop} className="border-b">
                  <td className="px-4 py-3 font-medium">{prop}</td>
                  <td className="px-4 py-3">{white}</td>
                  <td className="px-4 py-3">{brown}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-12 rounded-xl bg-neutral-50 p-8">
          <h2 className="mb-4 text-xl font-bold">Quick Decision Guide</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-bold">Choose White (Original) if:</h3>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-sm text-neutral-700">
                <li>You want the most neutral taste possible</li>
                <li>Your brand targets mainstream consumers</li>
                <li>You need high-contrast logo printing</li>
                <li>Volume and unit economics are your priority</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Choose Brown (Natural) if:</h3>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-sm text-neutral-700">
                <li>Your brand positioning is craft or organic</li>
                <li>You want a slightly slower, more deliberate burn</li>
                <li>Your target market values &ldquo;unprocessed&rdquo; aesthetics</li>
                <li>You are entering the premium segment</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/samples" className="rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800">
              Try Both — Sample Pack from &euro;6.99
            </Link>
          </div>
        </section>

        <section className="mt-12 border-t border-neutral-200 pt-8">
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/cones/109mm", label: "109mm Cones" },
              { href: "/compare/109mm-vs-84mm", label: "109mm vs 84mm" },
              { href: "/cones/whitelabel", label: "Custom Branding" },
              { href: "/blog/size-guide", label: "Size Guide" },
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
