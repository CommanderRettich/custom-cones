import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Cones — Pre-Rolled Cones from Europe's Original Manufacturer since 1994",
  description: "Buy pre-rolled cones from the original manufacturer since 1994 — fast EU shipping. Custom branding, bulk wholesale, all sizes from 70mm to 280mm.",
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-32">
          <p className="mb-4 text-sm font-semibold tracking-widest text-neutral-400">
            VANDENBERG CONES — ROTTERDAM, NL
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            The original pre-rolled cone since 1994
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-400">
            Crafted in Europe, shipped worldwide. The inventors of the
            pre-rolled cone — more than 30 years before &ldquo;pre-roll&rdquo;
            became a billion-dollar market.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/samples"
              className="rounded-xl bg-white px-8 py-3 text-lg font-bold text-neutral-900 transition hover:bg-neutral-100"
            >
              Get Sample Pack — &euro;6.99
            </Link>
            <Link
              href="/cones/whitelabel"
              className="rounded-xl border-2 border-white px-8 py-3 text-lg font-bold transition hover:bg-white hover:text-neutral-900"
            >
              Custom Branding
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "1994", label: "Founded" },
              { value: "30+", label: "Years of manufacturing" },
              { value: "109mm", label: "Global standard cone" },
              { value: "EU", label: "Made in Europe" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Hub */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-2 text-2xl font-bold">Pre-Rolled Cones</h2>
        <p className="mb-8 text-neutral-500">
          Available in all sizes, three paper types, and custom branding options.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <CategoryCard
            href="/cones/109mm"
            size="109mm"
            name="King Size"
            desc="The global standard. 1 gram fill capacity. Compatible with every filling device on the market."
            tag="Most Popular"
          />
          <CategoryCard
            href="/cones/84mm"
            size="84mm"
            name="Small 1&frac14;"
            desc="The 0.5g format. Perfect for multi-packs, tasting sets, and entry-level retail products."
            tag="Multi-Pack Favorite"
          />
          <CategoryCard
            href="/cones/whitelabel"
            size="YOUR"
            name="Custom Brand"
            desc="Your logo, our quality since 1994. Full custom branding on cone paper, filter tip, and packaging."
            tag="Whitelabel"
          />
        </div>
      </section>

      {/* Why Vandenberg */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-8 text-2xl font-bold">
            Why buy from the original manufacturer?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "30+ Years of Expertise",
                desc: "We invented the pre-rolled cone in 1994 — 23 years before most competitors were founded.",
              },
              {
                title: "EU Quality Standards",
                desc: "All papers are chlorine-free, tested for heavy metals and pesticides under EU food-contact regulations.",
              },
              {
                title: "Fast EU Shipping",
                desc: "Ships from Rotterdam, NL. 2-5 business days across Europe. International shipping available.",
              },
              {
                title: "No Minimum Order",
                desc: "Order from 1 box upward. Master carton pricing available. Sample pack from just 6.99 EUR.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-2 text-2xl font-bold">Compare Cone Sizes</h2>
        <p className="mb-8 text-neutral-500">
          Not sure which size fits your product? Our comparison guides break down
          every dimension.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/compare/109mm-vs-84mm"
            className="group rounded-xl border border-neutral-200 p-6 transition hover:shadow-md"
          >
            <h3 className="font-bold group-hover:text-neutral-600">
              109mm vs 84mm — Which Size Is Right?
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Fill weight, market data, consumer perception, and production
              efficiency compared side by side.
            </p>
          </Link>
          <Link
            href="/compare/white-vs-brown-paper"
            className="group rounded-xl border border-neutral-200 p-6 transition hover:shadow-md"
          >
            <h3 className="font-bold group-hover:text-neutral-600">
              White vs Brown Paper — Original vs Natural
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Taste, burn speed, consumer trends, and which paper type is right
              for your brand positioning.
            </p>
          </Link>
        </div>
      </section>

      {/* Markets */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-2 text-2xl font-bold">Markets We Serve</h2>
          <p className="mb-8 text-neutral-400">
            From Germany to California — pre-rolled cones for every legal market.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/markets/europe/germany"
              className="rounded-xl border border-neutral-700 p-6 transition hover:border-neutral-500"
            >
              <p className="text-sm text-neutral-400">Europe</p>
              <h3 className="text-lg font-bold">Germany</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Legal since April 2024. 84 million consumers. EU-quality cones
                with no import duties. Social Clubs ordering Hybrid Filters and
                Natural Brown paper for their craft pre-roll lines.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-400">Hybrid Filters</span>
                <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-400">Natural Paper</span>
                <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-400">2-4 day EU delivery</span>
              </div>
            </Link>
            <Link
              href="/markets/usa/california"
              className="rounded-xl border border-neutral-700 p-6 transition hover:border-neutral-500"
            >
              <p className="text-sm text-neutral-400">USA</p>
              <h3 className="text-lg font-bold">California</h3>
              <p className="mt-2 text-sm text-neutral-500">
                World&rsquo;s largest cannabis market. $240M+ monthly pre-roll
                sales. Brands switching from RAW to European-manufactured cones
                for better quality control and custom branding options.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-400">RAW Alternative</span>
                <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-400">Phase III Compliant</span>
                <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-400">Custom Branding</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <p className="mb-8 text-center text-sm font-semibold tracking-widest text-neutral-400">
            OUR PARTNERS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <Image
              src="/logos/the-original-cones.png"
              alt="The Original Cones by Mountain High"
              width={200}
              height={140}
              className="h-16 w-auto object-contain"
            />
            <Image
              src="/logos/raw-classic.png"
              alt="RAW Classic Rolling Papers"
              width={200}
              height={100}
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Sample CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Not sure which cone is right?</h2>
        <p className="mt-2 text-neutral-500">
          Order our Sample Pack from &euro;6.99 — includes all paper types and
          key sizes, shipped within 2 business days.
        </p>
        <Link
          href="/samples"
          className="mt-6 inline-block rounded-xl bg-neutral-900 px-8 py-3 font-bold text-white transition hover:bg-neutral-800"
        >
          Order Sample Pack
        </Link>
      </section>
    </div>
  );
}

function CategoryCard({
  href,
  size,
  name,
  desc,
  tag,
}: {
  href: string;
  size: string;
  name: string;
  desc: string;
  tag: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl border border-neutral-200 p-8 transition hover:shadow-lg"
    >
      <span className="absolute right-4 top-4 rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-bold text-neutral-600">
        {tag}
      </span>
      <div className="mb-4 text-5xl font-bold text-neutral-200 transition group-hover:text-neutral-300">
        {size}
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
    </Link>
  );
}
