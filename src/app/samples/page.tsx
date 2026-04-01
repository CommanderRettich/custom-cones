"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Plus, Minus, Trash2, Send, Check } from "lucide-react";

interface SampleItem {
  id: string;
  size: string;
  paper: string;
  filter: string;
  qty: number;
  price: number;
}

const sizeOptions = [
  { value: "84mm", label: "84mm Small 1¼" },
  { value: "98mm", label: "98mm Standard" },
  { value: "109mm", label: "109mm King Size" },
  { value: "120mm", label: "120mm Bomb" },
  { value: "140mm", label: "140mm Party" },
];

const paperOptions = [
  { value: "original", label: "Original White (Bleached)", color: "#FFFFFF" },
  { value: "natural", label: "Natural Brown (Unbleached)", color: "#C4A882" },
  { value: "hemp", label: "100% Organic Hemp", color: "#8FBC6B" },
];

const filterOptions = [
  { value: "standard-20mm", label: "Standard 20mm" },
  { value: "deluxe-26mm", label: "De Luxe 26mm" },
  { value: "hybrid", label: "Hybrid Filter" },
  { value: "activated-carbon", label: "Activated Carbon" },
];

const SAMPLE_PRICE = 2.49; // per sample unit (3 cones each)

export default function SamplesPage() {
  const [items, setItems] = useState<SampleItem[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Add-to-cart form state
  const [newSize, setNewSize] = useState("109mm");
  const [newPaper, setNewPaper] = useState("original");
  const [newFilter, setNewFilter] = useState("standard-20mm");

  const addItem = () => {
    const id = `${newSize}-${newPaper}-${newFilter}`;
    const existing = items.find((i) => i.id === id);
    if (existing) {
      setItems(items.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
    } else {
      setItems([
        ...items,
        {
          id,
          size: newSize,
          paper: newPaper,
          filter: newFilter,
          qty: 1,
          price: SAMPLE_PRICE,
        },
      ]);
    }
  };

  const updateQty = (id: string, delta: number) => {
    setItems(
      items
        .map((i) => (i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (id: string) => setItems(items.filter((i) => i.id !== id));

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalUnits = items.reduce((sum, i) => sum + i.qty, 0);

  const getPaperLabel = (v: string) => paperOptions.find((p) => p.value === v)?.label ?? v;
  const getSizeLabel = (v: string) => sizeOptions.find((s) => s.value === v)?.label ?? v;
  const getFilterLabel = (v: string) => filterOptions.find((f) => f.value === v)?.label ?? v;

  if (submitted) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <Check className="h-8 w-8 text-emerald-600" />
        </div>
        <h1 className="mt-6 text-2xl font-bold">Sample Order Submitted</h1>
        <p className="mt-3 text-neutral-600">
          We&rsquo;ll prepare your {totalUnits} sample unit{totalUnits !== 1 ? "s" : ""} (3 cones each) and get them shipped within 2 business days.
        </p>
        <button
          onClick={() => { setItems([]); setSubmitted(false); }}
          className="mt-8 rounded-lg border border-neutral-300 px-6 py-2.5 text-sm font-medium transition hover:bg-neutral-50"
        >
          Order More Samples
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold md:text-4xl">
        Build Your Sample Pack
      </h1>
      <p className="mt-4 text-lg text-neutral-600">
        Pick exactly the sizes, paper types, and filters you want to test.
        Each sample unit contains 3 cones. Starting at &euro;{SAMPLE_PRICE.toFixed(2)} per unit.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Sample Builder */}
        <div className="lg:col-span-2">
          {/* Add Sample Form */}
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="mb-4 text-lg font-bold">Add Samples</h2>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Size */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-neutral-500">Cone Size</label>
                <select
                  value={newSize}
                  onChange={(e) => setNewSize(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm"
                >
                  {sizeOptions.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>

              {/* Paper */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-neutral-500">Paper Type</label>
                <select
                  value={newPaper}
                  onChange={(e) => setNewPaper(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm"
                >
                  {paperOptions.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              {/* Filter */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-neutral-500">Filter Type</label>
                <select
                  value={newFilter}
                  onChange={(e) => setNewFilter(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm"
                >
                  {filterOptions.map((f) => (
                    <option key={f.value} value={f.value}>{f.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={addItem}
              className="mt-4 flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800"
            >
              <Plus className="h-4 w-4" />
              Add to Sample Pack
            </button>
          </div>

          {/* Quick-Add Presets */}
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold text-neutral-500">Quick Add — Popular Combinations</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "109mm Original + Standard Filter", size: "109mm", paper: "original", filter: "standard-20mm" },
                { label: "109mm Natural + De Luxe", size: "109mm", paper: "natural", filter: "deluxe-26mm" },
                { label: "109mm Hemp + Hybrid", size: "109mm", paper: "hemp", filter: "hybrid" },
                { label: "84mm Original + Standard", size: "84mm", paper: "original", filter: "standard-20mm" },
                { label: "84mm Natural + Carbon", size: "84mm", paper: "natural", filter: "activated-carbon" },
              ].map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    const id = `${preset.size}-${preset.paper}-${preset.filter}`;
                    const existing = items.find((i) => i.id === id);
                    if (existing) {
                      setItems(items.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
                    } else {
                      setItems([...items, { id, size: preset.size, paper: preset.paper, filter: preset.filter, qty: 1, price: SAMPLE_PRICE }]);
                    }
                  }}
                  className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 transition hover:bg-neutral-50"
                >
                  + {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cart Items */}
          {items.length > 0 && (
            <div className="mt-6 space-y-3">
              <h3 className="text-sm font-semibold text-neutral-500">Your Sample Pack ({totalUnits} unit{totalUnits !== 1 ? "s" : ""}, {totalUnits * 3} cones total)</h3>
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 rounded-lg border border-neutral-200 p-3">
                  <div
                    className="h-8 w-8 shrink-0 rounded-full border border-neutral-200"
                    style={{ backgroundColor: paperOptions.find((p) => p.value === item.paper)?.color ?? "#eee" }}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {getSizeLabel(item.size)} — {getPaperLabel(item.paper)}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {getFilterLabel(item.filter)} · 3 cones per unit
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(item.id, -1)} className="flex h-7 w-7 items-center justify-center rounded border border-neutral-200 text-xs">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="flex h-7 w-7 items-center justify-center rounded border border-neutral-200 text-xs">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="w-16 text-right text-sm font-semibold">
                    &euro;{(item.qty * item.price).toFixed(2)}
                  </span>
                  <button onClick={() => removeItem(item.id)} className="text-neutral-400 hover:text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-neutral-200 p-6">
            <h3 className="mb-4 text-lg font-bold">
              <ShoppingBag className="mr-2 inline h-5 w-5" />
              Sample Order
            </h3>

            {items.length === 0 ? (
              <p className="text-sm text-neutral-400">
                Add samples using the builder on the left. Each unit contains 3
                cones for testing.
              </p>
            ) : (
              <>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">{totalUnits} sample unit{totalUnits !== 1 ? "s" : ""}</span>
                    <span className="font-semibold">&euro;{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Total cones</span>
                    <span className="font-semibold">{totalUnits * 3} pcs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Shipping (EU)</span>
                    <span className="font-semibold text-emerald-600">Free</span>
                  </div>
                  <div className="border-t border-neutral-200 pt-3">
                    <div className="flex justify-between">
                      <span className="font-bold">Total</span>
                      <span className="text-xl font-bold">&euro;{subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-6 space-y-3">
                  <input type="text" placeholder="Company Name *" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm" />
                  <input type="email" placeholder="Email *" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm" />
                  <input type="text" placeholder="Country" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm" />
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 font-bold text-white transition hover:bg-neutral-800"
                >
                  <Send className="h-4 w-4" />
                  Submit Sample Order
                </button>
                <p className="mt-2 text-center text-[10px] text-neutral-400">
                  Ships within 2 business days from Rotterdam, NL
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Why Samples */}
      <section className="mt-16 space-y-4 text-neutral-700 leading-relaxed">
        <h2 className="text-2xl font-bold">Why Build a Custom Sample Pack?</h2>
        <p>
          Every paper type burns differently. Every filter creates a different
          draw. Every size fills differently. A generic sample pack gives you
          generic results. By building your own, you test exactly the combinations
          that matter for your product line — and nothing else.
        </p>
        <p>
          For brands evaluating custom branding: testing the actual paper type and
          filter you plan to print on is essential before committing to a 10,000+
          cone order. Feel the weight, test the burn, evaluate the draw — then
          design with confidence.
        </p>
      </section>

      <section className="mt-12 border-t border-neutral-200 pt-8">
        <h2 className="mb-4 text-lg font-bold">Next Steps After Sampling</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/cones/109mm", label: "Order 109mm Bulk" },
            { href: "/cones/84mm", label: "Order 84mm Bulk" },
            { href: "/cones/whitelabel", label: "Start Custom Branding" },
            { href: "/configurator", label: "Configure Custom Cones" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600 transition hover:bg-neutral-50">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
