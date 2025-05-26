import Link from "next/link"
import { blogPosts } from "@/data/posts"
import { games } from "@/data/games"
import { facts } from "@/data/facts"
import RitualOfTheWeek from "@/components/ritual-of-the-week"
import PuzzleList from "@/components/puzzle-list"
import { BookOpen, ChevronRight, Trophy, Dice6 } from "lucide-react"
import EnhancedBlogCard from "@/components/enhanced-blog-card"
import EnhancedGameCard from "@/components/enhanced-game-card"
import ScrollToTop from "@/components/scroll-to-top"

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3)
  const gameOfTheMonth = games.find((g) => g.type === "bordspel")
  const digitalGameOfTheMonth = games.find((g) => g.type === "digitaal")

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-white to-secondary-light -z-10"></div>
        <div className="absolute -right-64 -top-64 w-96 h-96 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welkom bij <span className="text-primary">Spel</span>
              <span className="text-secondary">Vlam</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek de fascinerende wereld van bordspellen en digitale games. Leer nieuwe strategieën, ontwikkel je
              vaardigheden en vind je volgende favoriete spel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/over-ons" className="btn-primary flex items-center justify-center gap-2">
                <span>Ontdek meer</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link href="/blog" className="btn-secondary flex items-center justify-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Lees onze artikelen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Gemeenschap Nederland */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Gaming Gemeenschap Nederland</h2>
          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-primary-light to-accent-light rounded-2xl p-8 h-full flex flex-col justify-center">
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Meer dan 13 miljoen Nederlandse gamers
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Van Amsterdam tot Groningen, van bordspelcafés tot digitale toernooien - Nederland heeft een bloeiende
                  gaming cultuur. Ontdek lokale spelgroepen, evenementen en de nieuwste trends in jouw regio.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-primary">75%</div>
                    <div className="text-sm text-gray-600">Speelt regelmatig</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-secondary">500+</div>
                    <div className="text-sm text-gray-600">Spelwinkels</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-secondary-light rounded-2xl p-6 text-center">
                <Trophy className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h4 className="font-serif font-semibold text-gray-900 mb-2">Nederlandse Champions</h4>
                <p className="text-gray-600 text-sm">
                  Nederlandse spelers behoren tot de wereldtop in zowel digitale als bordspel competities.
                </p>
              </div>
              <div className="bg-accent-light rounded-2xl p-6 text-center">
                <Dice6 className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-serif font-semibold text-gray-900 mb-2">Innovatieve Spelontwerpers</h4>
                <p className="text-gray-600 text-sm">
                  Nederland staat bekend om creatieve spelontwerpers die wereldwijd gewaardeerd worden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wist je dat...? */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Wist je dat...?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {facts.map((fact) => (
              <div key={fact.id} className="bg-white p-6 rounded-2xl shadow-md text-center card-hover">
                <div className="text-4xl mb-4">{fact.icon}</div>
                <h3 className="font-serif font-semibold text-gray-900 mb-2">{fact.title}</h3>
                <p className="text-gray-600 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spel van de Maand with enhanced cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title animate-fade-in">Spel van de Maand</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {gameOfTheMonth && (
              <div className="animate-slide-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  <h3 className="text-2xl font-serif font-semibold text-gray-900">Bordspel van de Maand</h3>
                </div>
                <EnhancedGameCard game={gameOfTheMonth} index={0} monthlyPageUrl="/traditie" />
              </div>
            )}
            {digitalGameOfTheMonth && (
              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-secondary rounded-full"></div>
                  <h3 className="text-2xl font-serif font-semibold text-gray-900">Digitaal Spel van de Maand</h3>
                </div>
                <EnhancedGameCard game={digitalGameOfTheMonth} index={1} monthlyPageUrl="/traditie" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Spelritueel van de Week */}
      <RitualOfTheWeek />

      {/* Denksprong: 10 Spelbreinraadels */}
      <PuzzleList />

      {/* Recent Articles with enhanced animations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 animate-fade-in">Recente Artikelen</h2>
            <Link
              href="/blog"
              className="text-primary hover:text-primary-dark font-medium flex items-center gap-1 group focus-ring transition-all duration-300"
            >
              <span>Alle artikelen</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {recentPosts.map((post, index) => (
              <EnhancedBlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </main>
  )
}
