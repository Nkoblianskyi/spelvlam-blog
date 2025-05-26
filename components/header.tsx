"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Trophy, Sparkles } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Artikelen", href: "/blog" },
    { name: "Bordspellen", href: "/bordspellen" },
    { name: "Traditie", href: "/traditie" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary group focus-ring">
              <Trophy className="h-8 w-8 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-secondary" />
              <span className="flex items-center">
                <span className="transition-all duration-300 group-hover:text-shimmer">Spel</span>
                <span className="text-secondary transition-all duration-300 group-hover:scale-110">Vlam</span>
                <Sparkles className="h-5 w-5 ml-1 text-accent animate-pulse-soft transition-all duration-300 group-hover:animate-wiggle group-hover:text-yellow-500" />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg text-gray-700 hover:text-primary font-medium transition-all duration-300 group focus-ring"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  <span className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-gray-100 animate-accordion-down backdrop-blur-md">
            <div className="px-4 pt-2 pb-4 space-y-1 stagger-animation">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:text-primary hover:bg-primary-light font-medium transition-all duration-300 focus-ring hover-glow"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
