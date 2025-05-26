"use client"

import Link from "next/link"
import { Home, Search, ArrowLeft, Gamepad2 } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl font-bold text-gray-200 animate-pulse-soft">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Gamepad2 className="w-16 h-16 text-primary animate-bounce" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Oeps! Deze pagina is verdwenen</h2>
          <p className="text-xl text-gray-600 mb-6">
            Het lijkt erop dat de pagina die je zoekt niet bestaat of is verplaatst. Misschien is het tijd voor een
            nieuwe spelavond?
          </p>
        </div>

        {/* Gaming-themed message */}
        <div
          className="bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl p-6 mb-8 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🎲</span>
            <h3 className="text-lg font-semibold text-gray-900">Game Over!</h3>
            <span className="text-2xl">🎮</span>
          </div>
          <p className="text-gray-700 text-sm">
            Geen zorgen, zelfs de beste gamers verliezen soms een level. Laten we je terugbrengen naar het hoofdmenu!
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-scale-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Link href="/" className="btn-primary flex items-center justify-center gap-2 hover-lift">
            <Home className="w-5 h-5" />
            <span>Terug naar Home</span>
          </Link>
          <Link href="/blog" className="btn-secondary flex items-center justify-center gap-2 hover-lift">
            <Search className="w-5 h-5" />
            <span>Zoek Artikelen</span>
          </Link>
        </div>

        {/* Quick Navigation */}
        <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Of ga direct naar:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/bordspellen"
              className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 focus-ring"
            >
              <div className="text-2xl mb-2">🎲</div>
              <div className="text-sm font-medium text-gray-900">Bordspellen</div>
            </Link>
            <Link
              href="/rituelen"
              className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 focus-ring"
            >
              <div className="text-2xl mb-2">🕯️</div>
              <div className="text-sm font-medium text-gray-900">Rituelen</div>
            </Link>
            <Link
              href="/over-ons"
              className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 focus-ring"
            >
              <div className="text-2xl mb-2">👥</div>
              <div className="text-sm font-medium text-gray-900">Over Ons</div>
            </Link>
            <Link
              href="/contact"
              className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 focus-ring"
            >
              <div className="text-2xl mb-2">📧</div>
              <div className="text-sm font-medium text-gray-900">Contact</div>
            </Link>
          </div>
        </div>

        {/* Fun Gaming Quote */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl animate-fade-in" style={{ animationDelay: "1s" }}>
          <blockquote className="text-gray-600 italic">
            "Een goede speler weet wanneer hij moet opgeven, maar een geweldige speler weet wanneer hij opnieuw moet
            beginnen."
          </blockquote>
          <cite className="text-sm text-gray-500 mt-2 block">- SpelVlam Wijsheid</cite>
        </div>

        {/* Back Button */}
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <button
            onClick={() => window.history.back()}
            className="text-primary hover:text-primary-dark font-medium flex items-center gap-1 mx-auto transition-colors focus-ring"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ga terug naar vorige pagina</span>
          </button>
        </div>
      </div>
    </main>
  )
}
