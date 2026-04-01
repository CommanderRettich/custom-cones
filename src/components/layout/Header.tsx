import Link from "next/link";

const navLinks = [
  { href: "/cones/109mm", label: "109mm Cones" },
  { href: "/cones/84mm", label: "84mm Cones" },
  { href: "/cones/whitelabel", label: "Custom Branding" },
  { href: "/configurator", label: "Configurator" },
  { href: "/compare/109mm-vs-84mm", label: "Compare" },
  { href: "/samples", label: "Samples" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-sm font-bold text-white">
            CC
          </div>
          <div className="leading-tight">
            <span className="text-lg font-bold">custom-cones</span>
            <span className="block text-[10px] tracking-wider text-neutral-400">
              BY VANDENBERG — SINCE 1994
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/samples"
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-neutral-800"
        >
          Get Samples
        </Link>
      </div>
    </header>
  );
}
