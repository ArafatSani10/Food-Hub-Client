"use client";

import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1320] text-white pt-16 pb-8">
      <div className="absolute inset-x-0 top-0 h-72 bg-linear-to-b from-orange-500/15 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-12 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_-60px_rgba(255,94,31,0.35)] backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="h-10 w-10 bg-orange-500 rounded-3xl flex items-center justify-center shadow-xl shadow-orange-500/20">
                  <Zap size={18} fill="currentColor" />
                </div>
                <span className="text-xl font-black text-white">Food<span className="text-orange-400">Hub</span></span>
              </Link>
              <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                Fresh food from the best local kitchens delivered with speed and style.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: "https://facebook.com" },
                  { Icon: Instagram, href: "https://instagram.com" },
                  { Icon: Twitter, href: "https://x.com" },
                  { Icon: Youtube, href: "https://youtube.com" },
                ].map(({ Icon, href }, i) => (
                  <Link
                    key={i}
                    target="_blank"
                    rel="noreferrer"
                    href={href}
                    className="h-10 w-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white transition hover:bg-orange-500 hover:border-transparent"
                  >
                    <Icon size={14} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase text-orange-300">Quick Links</h4>
              <nav className="flex flex-col gap-3 text-sm text-gray-300">
                {[
                  { label: "Explore Menu", href: "/meals" },
                  { label: "Our Restaurants", href: "/providers" },
                  { label: "Offers", href: "/offers" },
                  { label: "Blog", href: "/blog" },
                ].map((item) => (
                  <Link key={item.label} href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase text-orange-300">Company</h4>
              <nav className="flex flex-col gap-3 text-sm text-gray-300">
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase text-orange-300">Contact</h4>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-orange-400" size={16} />
                  <p>123 Food Street, NY 10001</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-orange-400" size={16} />
                  <p>+1 (800) FOOD-HUB</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-orange-400" size={16} />
                  <p>hello@foodhub.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-gray-400">
            <p>© 2026 FoodHub Inc. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
