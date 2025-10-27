import { Sparkles } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Festive Mirror Work",
    desc: "Hand-embroidered mirror work on premium fabric.",
    img:
      "https://images.unsplash.com/photo-1543339318-b43dc53cd3ea?q=80&w=1600&auto=format&fit=crop",
    tags: ["Mirror", "Handwork", "Festival"],
  },
  {
    id: 2,
    name: "Bridal Collection",
    desc: "Luxurious bridal lehengas with intricate zardosi.",
    img:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop",
    tags: ["Bridal", "Zardosi", "Premium"],
  },
  {
    id: 3,
    name: "Garba Special",
    desc: "Vibrant hues perfect for Navratri nights.",
    img:
      "https://images.unsplash.com/photo-1542060746-0e06b98d2d51?q=80&w=1600&auto=format&fit=crop",
    tags: ["Navratri", "Vibrant", "Ready Stock"],
  },
  {
    id: 4,
    name: "Contemporary Fusion",
    desc: "Modern silhouettes with traditional craftsmanship.",
    img:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
    tags: ["Fusion", "Contemporary", "Designer"],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Signature Collections
            </h2>
            <p className="mt-2 text-gray-600">
              Curated designs for retailers and wholesalers. Custom colors and sizes available.
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-rose-50 text-rose-700 px-3 py-1 text-xs font-medium">
            <Sparkles className="h-4 w-4" /> New drops every week
          </span>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl overflow-hidden ring-1 ring-gray-200 hover:ring-gray-300 transition-all bg-white shadow-sm hover:shadow-md">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
