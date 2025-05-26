import Link from "next/link"
import { Mail, Phone, MapPin, Heart, Twitter, Facebook, Instagram, Youtube, Trophy, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
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
            <p className="text-gray-300 mb-6">
              Jouw bron voor alles over bordspellen en digitale games. Ontdek nieuwe spellen, leer strategieën en
              ontwikkel je vaardigheden.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <p>info@spelvlamblog.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p>+31 6 8285 4301</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <p>Herengracht 420, 1017 BZ Amsterdam</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 pb-2 border-b border-gray-800">Navigatie</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Artikelen
                </Link>
              </li>
              <li>
                <Link
                  href="/bordspellen"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Bordspellen
                </Link>
              </li>
              <li>
                <Link
                  href="/rituelen"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Rituelen
                </Link>
              </li>
              <li>
                <Link
                  href="/over-ons"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Over Ons
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 pb-2 border-b border-gray-800">Juridisch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/voorwaarden"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Voorwaarden
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">&copy; 2025 SpelVlam Blog. Alle rechten voorbehouden.</p>

            <div className="flex items-center text-sm text-gray-400">
              <span>Gemaakt met</span>
              <Heart className="h-4 w-4 mx-1 text-secondary" />
              <span>in Amsterdam</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
