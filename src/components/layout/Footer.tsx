import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="font-bold">custom-cones.com</p>
            <p className="mt-2 text-sm text-neutral-500">
              The original pre-rolled cone since 1994. Crafted in Europe,
              shipped worldwide.
            </p>
            <p className="mt-2 text-xs text-neutral-400">
              Developed by the inventors of the pre-rolled cone since 1994.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Products</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/cones/109mm" className="hover:text-neutral-900">109mm King Size</Link></li>
              <li><Link href="/cones/84mm" className="hover:text-neutral-900">84mm Small 1&frac14;</Link></li>
              <li><Link href="/cones/whitelabel" className="hover:text-neutral-900">Custom Branding</Link></li>
              <li><Link href="/samples" className="hover:text-neutral-900">Sample Pack</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/compare/109mm-vs-84mm" className="hover:text-neutral-900">109mm vs 84mm</Link></li>
              <li><Link href="/compare/white-vs-brown-paper" className="hover:text-neutral-900">White vs Brown Paper</Link></li>
              <li><Link href="/blog/size-guide" className="hover:text-neutral-900">Size Guide</Link></li>
              <li><Link href="/about" className="hover:text-neutral-900">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Markets</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/markets/europe/germany" className="hover:text-neutral-900">Germany</Link></li>
              <li><Link href="/markets/usa/california" className="hover:text-neutral-900">California</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-400">
          <p>Vandenberg Special Products B.V. — Rotterdam, NL since 1994</p>
          <p className="mt-1">
            Built by{" "}
            <a href="https://maxmy.business" className="text-neutral-500 underline hover:text-neutral-700" target="_blank" rel="noopener noreferrer">
              MaxMy.business
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
