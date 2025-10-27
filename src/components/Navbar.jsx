import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-500 to-fuchsia-500 flex items-center justify-center text-white shadow">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Chandni Creation</p>
            <p className="text-xs text-gray-500">B2B • Since 2008 • Surat, Gujarat</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#home" className="hover:text-rose-600">Home</a>
          <a href="#about" className="hover:text-rose-600">About</a>
          <a href="#products" className="hover:text-rose-600">Collections</a>
          <a href="#contact" className="hover:text-rose-600">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-rose-700 transition-colors">
          Enquire B2B
        </a>
      </div>
    </header>
  );
}
