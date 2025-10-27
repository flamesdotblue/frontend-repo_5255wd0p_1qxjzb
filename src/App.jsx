import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 p-6 sm:p-8 ring-1 ring-black/5">
              <h2 className="text-xl sm:text-2xl font-bold">About Chandni Creation</h2>
              <p className="mt-2 text-gray-700">
                We are a Surat-based B2B fashion house specializing in Chaniya Choli and festive wear since 2008.
                From design to production, quality is at the heart of everything we do. We cater to boutiques,
                retail chains, and wholesalers across India and overseas, offering assured quality, reliable timelines,
                and competitive pricing.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm text-gray-700">
                <div className="rounded-lg bg-white/70 px-4 py-3 ring-1 ring-gray-200">Since 2008</div>
                <div className="rounded-lg bg-white/70 px-4 py-3 ring-1 ring-gray-200">In-house Production</div>
                <div className="rounded-lg bg-white/70 px-4 py-3 ring-1 ring-gray-200">Pan-India Shipping</div>
              </div>
            </div>
          </div>
        </section>
        <Products />
        <Contact />
      </main>
    </div>
  );
}

export default App;
