import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-rose-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              B2B Enquiries & Showroom
            </h2>
            <p className="mt-2 text-gray-600">
              Share your requirements to receive our latest catalogue and pricing.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-rose-600 mt-0.5" />
                <span>
                  +91 98765 43210
                  <span className="block text-sm text-gray-500">Mon–Sat, 10:00–19:00 IST</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-rose-600 mt-0.5" />
                <span>sales@chandnicreation.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-600 mt-0.5" />
                <span>
                  Ring Road, Textile Hub,
                  <span className="block">Surat, Gujarat, India</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6 shadow-sm">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-rose-500 focus:border-rose-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Name</label>
                <input type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-rose-500 focus:border-rose-500" placeholder="Store / Firm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-rose-500 focus:border-rose-500" placeholder="you@business.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                <input type="tel" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-rose-500 focus:border-rose-500" placeholder="+91" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Requirements</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-rose-500 focus:border-rose-500" placeholder="Styles, quantities, target price..."></textarea>
              </div>
              <div className="sm:col-span-2">
                <button type="button" className="w-full inline-flex items-center justify-center rounded-xl bg-rose-600 text-white px-4 py-3 font-medium shadow hover:bg-rose-700 transition-colors">
                  Request Catalogue
                </button>
              </div>
              <p className="sm:col-span-2 text-center text-xs text-gray-500">By submitting, you agree to be contacted for B2B sales only.</p>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Chandni Creation • All rights reserved
        </div>
      </div>
    </section>
  );
}
