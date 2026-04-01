"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Send, Check } from "lucide-react";

type ConeSize = "84mm" | "98mm" | "109mm" | "120mm" | "140mm" | "180mm" | "280mm";
type PaperType = "original" | "natural" | "hemp";
type BrandingLevel = "none" | "cigar-band" | "full-coverage" | "custom-packaging";
type Quantity = "10k" | "25k" | "50k" | "100k" | "250k+";

interface ConfigState {
  step: number;
  size: ConeSize | null;
  paper: PaperType | null;
  branding: BrandingLevel | null;
  quantity: Quantity | null;
  submitted: boolean;
}

const sizes: { value: ConeSize; label: string; fill: string; desc: string }[] = [
  { value: "84mm", label: "Small 1¼", fill: "≈ 0.5g", desc: "Multi-packs, tasting sets, sampling campaigns" },
  { value: "98mm", label: "Standard", fill: "≈ 0.75g", desc: "Compact single, mid-size format" },
  { value: "109mm", label: "King Size", fill: "≈ 1.0g", desc: "Global standard — most popular size worldwide" },
  { value: "120mm", label: "Bomb Size", fill: "≈ 1.2g", desc: "Premium single, special format" },
  { value: "140mm", label: "Party Size", fill: "≈ 1.5g", desc: "Sharing, sessions, group events" },
  { value: "180mm", label: "Super Sized", fill: "≈ 2.0g", desc: "Special occasions, novelty format" },
  { value: "280mm", label: "Giga", fill: "≈ 5.0g", desc: "Statement piece, display, events" },
];

const papers: { value: PaperType; label: string; color: string; desc: string; details: string }[] = [
  {
    value: "original",
    label: "Original White (Bleached)",
    color: "#FFFFFF",
    desc: "The classic. Chlorine-free bleached, ultra-thin paper with neutral taste.",
    details: "Most popular worldwide. Clean white appearance provides maximum contrast for custom logo printing. Even, moderate burn speed. Best choice for mainstream retail and high-volume production.",
  },
  {
    value: "natural",
    label: "Natural Brown (Unbleached)",
    color: "#C4A882",
    desc: "Unbleached, earthy character. Slightly slower burn. Craft-forward aesthetic.",
    details: "Growing rapidly in the premium segment. The brown, unprocessed look signals authenticity and craft quality. Slightly slower burn than Original — preferred by consumers who want a more deliberate experience. Ideal for brands positioning as artisanal, organic, or health-conscious.",
  },
  {
    value: "hemp",
    label: "100% Organic Hemp",
    color: "#8FBC6B",
    desc: "Pure hemp paper. Very neutral taste, slowest and most even burn.",
    details: "The fastest growing paper segment in the industry. Made from 100% organic hemp fibers — no wood pulp, no additives. Appeals to the environmentally conscious consumer and brands building a sustainability narrative. Slowest burn of all three types, creating the longest session per gram.",
  },
];

const brandingOptions: { value: BrandingLevel; label: string; desc: string }[] = [
  { value: "none", label: "No branding (standard)", desc: "Plain Vandenberg cones without custom branding. Ready to ship immediately." },
  { value: "cigar-band", label: "Cigar Band", desc: "Your logo printed as a band near the filter tip. Visible during use. MOQ: 10,000 cones." },
  { value: "full-coverage", label: "Full Coverage Print", desc: "Your design printed across the entire cone paper surface. Maximum brand presence. MOQ: 25,000 cones." },
  { value: "custom-packaging", label: "Custom Packaging + Cone", desc: "Full custom: branded cone paper, filter tip, AND matching retail/display packaging. MOQ: 50,000 cones." },
];

const quantities: { value: Quantity; label: string; note: string }[] = [
  { value: "10k", label: "10,000 cones", note: "Minimum for cigar band branding" },
  { value: "25k", label: "25,000 cones", note: "Minimum for full coverage print" },
  { value: "50k", label: "50,000 cones", note: "Minimum for custom packaging" },
  { value: "100k", label: "100,000 cones", note: "Volume pricing available" },
  { value: "250k+", label: "250,000+ cones", note: "Enterprise pricing — contact us" },
];

export default function ConfiguratorPage() {
  const [config, setConfig] = useState<ConfigState>({
    step: 1,
    size: null,
    paper: null,
    branding: null,
    quantity: null,
    submitted: false,
  });

  const totalSteps = 5;
  const goNext = () => setConfig((s) => ({ ...s, step: s.step + 1 }));
  const goBack = () => setConfig((s) => ({ ...s, step: Math.max(1, s.step - 1) }));

  if (config.submitted) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <Check className="h-8 w-8 text-emerald-600" />
        </div>
        <h1 className="mt-6 text-2xl font-bold">Inquiry Submitted</h1>
        <p className="mt-3 text-neutral-600">
          Thank you for your interest. Our team will review your configuration
          and get back to you within 2 business days with a detailed quote.
        </p>
        <div className="mt-8 rounded-xl border border-neutral-200 p-6 text-left">
          <h3 className="mb-3 text-sm font-bold text-neutral-500">Your Configuration</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-500">Cone Size</span>
              <span className="font-medium">{sizes.find((s) => s.value === config.size)?.label} ({config.size})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Paper Type</span>
              <span className="font-medium">{papers.find((p) => p.value === config.paper)?.label}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Branding</span>
              <span className="font-medium">{brandingOptions.find((b) => b.value === config.branding)?.label}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Quantity</span>
              <span className="font-medium">{quantities.find((q) => q.value === config.quantity)?.label}</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setConfig({ step: 1, size: null, paper: null, branding: null, quantity: null, submitted: false })}
            className="rounded-lg border border-neutral-300 px-6 py-2.5 text-sm font-medium transition hover:bg-neutral-50"
          >
            Start Over
          </button>
          <Link href="/samples" className="rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800">
            Order Sample Pack
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-center text-3xl font-bold">
        Configure Your Custom Cones
      </h1>
      <p className="mb-8 text-center text-neutral-500">
        Select your specs, choose branding, submit your inquiry
      </p>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-neutral-400">
          <span>Step {config.step} of {totalSteps}</span>
          <span>{Math.round((config.step / totalSteps) * 100)}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-100">
          <motion.div
            className="h-full rounded-full bg-neutral-900"
            animate={{ width: `${(config.step / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="mt-3 flex justify-between text-[10px] text-neutral-400">
          {["Size", "Paper", "Branding", "Quantity", "Contact"].map((label, i) => (
            <span key={label} className={config.step > i ? "font-semibold text-neutral-900" : ""}>
              {label}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Size */}
        {config.step === 1 && (
          <StepCard key="s1" title="What cone size do you need?">
            {sizes.map((size) => (
              <button
                key={size.value}
                onClick={() => { setConfig((s) => ({ ...s, size: size.value })); setTimeout(goNext, 200); }}
                className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition ${
                  config.size === size.value ? "border-neutral-900 bg-neutral-50" : "border-neutral-200 hover:border-neutral-300"
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-sm font-bold">
                  {size.value.replace("mm", "")}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold">{size.label}</span>
                    <span className="text-xs text-neutral-400">{size.value}</span>
                    <span className="text-xs text-neutral-500">· Fill: {size.fill}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-neutral-500">{size.desc}</p>
                </div>
              </button>
            ))}
          </StepCard>
        )}

        {/* Step 2: Paper */}
        {config.step === 2 && (
          <StepCard key="s2" title="Choose your paper type">
            {papers.map((paper) => (
              <button
                key={paper.value}
                onClick={() => { setConfig((s) => ({ ...s, paper: paper.value })); setTimeout(goNext, 200); }}
                className={`w-full rounded-xl border-2 p-5 text-left transition ${
                  config.paper === paper.value ? "border-neutral-900 bg-neutral-50" : "border-neutral-200 hover:border-neutral-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-8 w-8 rounded-full border-2 border-neutral-200"
                    style={{ backgroundColor: paper.color }}
                  />
                  <span className="text-lg font-semibold">{paper.label}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">{paper.desc}</p>
                <p className="mt-3 text-xs text-neutral-500 leading-relaxed">{paper.details}</p>
              </button>
            ))}
          </StepCard>
        )}

        {/* Step 3: Branding */}
        {config.step === 3 && (
          <StepCard key="s3" title="How do you want to brand your cones?">
            {brandingOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setConfig((s) => ({ ...s, branding: opt.value })); setTimeout(goNext, 200); }}
                className={`flex w-full flex-col rounded-xl border-2 p-4 text-left transition ${
                  config.branding === opt.value ? "border-neutral-900 bg-neutral-50" : "border-neutral-200 hover:border-neutral-300"
                }`}
              >
                <span className="font-semibold">{opt.label}</span>
                <span className="mt-1 text-sm text-neutral-500">{opt.desc}</span>
              </button>
            ))}
          </StepCard>
        )}

        {/* Step 4: Quantity */}
        {config.step === 4 && (
          <StepCard key="s4" title="What quantity do you need?">
            {quantities.map((qty) => (
              <button
                key={qty.value}
                onClick={() => { setConfig((s) => ({ ...s, quantity: qty.value })); setTimeout(goNext, 200); }}
                className={`flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition ${
                  config.quantity === qty.value ? "border-neutral-900 bg-neutral-50" : "border-neutral-200 hover:border-neutral-300"
                }`}
              >
                <span className="font-semibold">{qty.label}</span>
                <span className="text-xs text-neutral-400">{qty.note}</span>
              </button>
            ))}
          </StepCard>
        )}

        {/* Step 5: Contact Form */}
        {config.step === 5 && (
          <StepCard key="s5" title="Submit your inquiry">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <h3 className="mb-2 text-sm font-bold text-neutral-500">Your Configuration</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-neutral-500">Size:</span>
                <span className="font-medium">{config.size}</span>
                <span className="text-neutral-500">Paper:</span>
                <span className="font-medium">{papers.find((p) => p.value === config.paper)?.label}</span>
                <span className="text-neutral-500">Branding:</span>
                <span className="font-medium">{brandingOptions.find((b) => b.value === config.branding)?.label}</span>
                <span className="text-neutral-500">Quantity:</span>
                <span className="font-medium">{quantities.find((q) => q.value === config.quantity)?.label}</span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-neutral-500">Company Name *</label>
                  <input type="text" placeholder="Your company" className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-neutral-500">Contact Name *</label>
                  <input type="text" placeholder="Your name" className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-neutral-500">Email *</label>
                  <input type="email" placeholder="email@company.com" className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-neutral-500">Country</label>
                  <input type="text" placeholder="Country" className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-neutral-500">Additional Notes</label>
                <textarea rows={3} placeholder="Tell us about your project, timeline, or any special requirements..." className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm" />
              </div>
            </div>

            <button
              onClick={() => setConfig((s) => ({ ...s, submitted: true }))}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3.5 font-bold text-white transition hover:bg-neutral-800"
            >
              <Send className="h-4 w-4" />
              Submit Inquiry
            </button>
            <p className="mt-3 text-center text-xs text-neutral-400">
              We typically respond within 2 business days with a detailed quote.
            </p>
          </StepCard>
        )}
      </AnimatePresence>

      {/* Navigation */}
      {config.step > 1 && !config.submitted && (
        <div className="mt-6">
          <button
            onClick={goBack}
            className="flex items-center gap-1 text-sm text-neutral-500 transition hover:text-neutral-900"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      )}
    </div>
  );
}

function StepCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <div className="space-y-3">{children}</div>
    </motion.div>
  );
}
