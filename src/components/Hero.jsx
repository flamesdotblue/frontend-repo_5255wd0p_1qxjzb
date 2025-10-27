import { Star, Shield, Factory } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-medium">
            <Star className="h-4 w-4" /> Trusted B2B Manufacturer
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Premium Chaniya Choli Collections from Surat
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Chandni Creation has been crafting festive and wedding wear since 2008. We supply
            retailers and wholesalers with ready stock and made-to-order designs.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-black transition-colors">
              Explore Collections
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 ring-1 ring-gray-200 px-5 py-3 text-sm font-medium hover:bg-gray-50">
              Get B2B Price List
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:flex gap-4 text-sm text-gray-600">
            <div className="inline-flex items-center gap-2">
              <Shield className="h-5 w-5 text-rose-600" /> Quality Checked
            </div>
            <div className="inline-flex items-center gap-2">
              <Factory className="h-5 w-5 text-rose-600" /> In-house Production
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-rose-200/40 blur-3xl rounded-full" aria-hidden />
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1542060748-10c28b62716d?q=80&w=1600&auto=format&fit=crop"
              alt="Elegant Chaniya Choli Designer Wear"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
