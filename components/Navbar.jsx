"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (pathname !== "/") {
      window.location.href = `/${href}`;
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "ҮЙЛЧИЛГЭЭ", href: "#expertise" },
    { name: "ТӨСЛҮҮД", href: "#work" },
    { name: "БИДНИЙ ТУХАЙ", href: "#results" },
    { name: "ХОЛБОГДОХ", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || pathname !== "/"
          ? "bg-dark/80 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO – hero style (NO background) */}
      <Link
  href="/"
  className="flex items-center gap-2 text-2xl font-display font-bold tracking-tighter"
>
  <div className="relative h-8 w-auto">
    <Image
      src="/logo/logoshde.webp"
      alt="Vibe Media Logo"
      height={37}
      width={105} // өргөн нь логоноос хамаараад автоматаар харагдана
      className="object-contain"

    />
  </div>
</Link>




        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wider font-medium"
          >
            ЭХЛЭЛ
          </Link>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wider font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            +976 5515-4144
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-md border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-white font-medium"
              >
                ЭХЛЭЛ
              </Link>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg text-white font-medium"
                >
                  {link.name}
                </a>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-white text-black px-6 py-3 rounded-full text-center font-semibold"
              >
                Холбогдох
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
