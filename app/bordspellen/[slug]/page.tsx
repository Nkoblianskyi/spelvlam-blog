import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { games } from "@/data/games"
import type { Metadata } from "next"
import { Star, Clock, Users, ArrowLeft } from "lucide-react"

interface GamePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return games
    .filter((game) => game.type === "bordspel")
    .map((game) => ({
      slug: game.name.toLowerCase().replace(/\s+/g, "-"),
    }))
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = games.find((g) => g.name.toLowerCase().replace(/\s+/g, "-") === params.slug && g.type === "bordspel")

  if (!game) {
    return {
      title: "Spel niet gevonden - SpelVlam Blog",
    }
  }

  return {
    title: `${game.name} Review - SpelVlam Blog`,
    description: game.description,
    openGraph: {
      title: game.name,
      description: game.description,
      images: [game.image],
    },
  }
}

export default function GamePage({ params }: GamePageProps) {
  const game = games.find((g) => g.name.toLowerCase().replace(/\s+/g, "-") === params.slug && g.type === "bordspel")

  if (!game) {
    notFound()
  }

  // Extended game information
  const gameDetails = {
    ...game,
    fullDescription: `${game.description} Dit prachtige spel biedt een unieke ervaring die zowel beginners als ervaren spelers zal boeien. Met zijn doordachte mechanica en prachtige artwork is het een waardige toevoeging aan elke spelcollectie.`,
    pros: [
      "Uitstekende spelbalans",
      "Prachtige artwork en componenten",
      "Toegankelijk voor beginners",
      "Hoge replay waarde",
      "Kwalitatieve materialen",
    ],
    cons: ["Kan lang duren voor nieuwe spelers", "Beperkte interactie tussen spelers", "Setup tijd kan wat lang zijn"],
    complexity: "Gemiddeld",
    ageRange: "10+",
    language: "Nederlands",
    publisher: "999 Games",
    designer: "Elizabeth Hargrave",
    year: "2019",
    availability: "Beschikbaar",
    categories: ["Strategie", "Familie", "Dieren"],
    mechanics: ["Kaarten spelen", "Dobbelstenen", "Engine building"],
    components: [
      "170 Vogelkaarten",
      "26 Bonuskaarten",
      "16 Dobbelsteen",
      "103 Voedselfiches",
      "75 Eiertjes",
      "5 Spelersborden",
    ],
  }

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/bordspellen"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar bordspellen
          </Link>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Game Image */}
          <div className="space-y-6">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image src={game.image || "/placeholder.svg"} alt={game.name} fill className="object-cover" priority />
            </div>
          </div>

          {/* Game Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary-light text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {gameDetails.type}
                </span>
                <span className="bg-accent-light text-accent-dark px-3 py-1 rounded-full text-sm font-medium">
                  {gameDetails.availability}
                </span>
              </div>

              <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">{game.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{game.rating}</span>
                  <span className="text-gray-500">/5.0</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium text-gray-900">Spelers</span>
                </div>
                <span className="text-gray-600">{game.players}</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium text-gray-900">Speeltijd</span>
                </div>
                <span className="text-gray-600">{game.duration}</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 text-primary font-bold">⚡</span>
                  <span className="font-medium text-gray-900">Complexiteit</span>
                </div>
                <span className="text-gray-600">{gameDetails.complexity}</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 text-primary font-bold">🎂</span>
                  <span className="font-medium text-gray-900">Leeftijd</span>
                </div>
                <span className="text-gray-600">{gameDetails.ageRange}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Beschrijving</h2>
              <p className="text-gray-600 leading-relaxed">{gameDetails.fullDescription}</p>
            </div>

            {/* Categories & Mechanics */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Categorieën</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {gameDetails.categories.map((category, index) => (
                  <span key={index} className="bg-primary-light text-primary px-3 py-1 rounded-full text-sm">
                    {category}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mechanica</h3>
              <div className="flex flex-wrap gap-2">
                {gameDetails.mechanics.map((mechanic, index) => (
                  <span key={index} className="bg-secondary-light text-secondary-dark px-3 py-1 rounded-full text-sm">
                    {mechanic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Review */}
        <div className="mt-16 grid lg:grid-cols-3 gap-12">
          {/* Main Review */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pros & Cons */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Voordelen
                </h3>
                <ul className="space-y-2">
                  {gameDetails.pros.map((pro, index) => (
                    <li key={index} className="text-gray-700 flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  Nadelen
                </h3>
                <ul className="space-y-2">
                  {gameDetails.cons.map((con, index) => (
                    <li key={index} className="text-gray-700 flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Components */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Spelcomponenten</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {gameDetails.components.map((component, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {component}
                  </div>
                ))}
              </div>
            </div>

            {/* Final Verdict */}
            <div className="bg-gradient-to-br from-primary-light to-secondary-light p-8 rounded-2xl">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Ons Oordeel</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${star <= Math.floor(game.rating) ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">{game.rating}/5.0</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {game.name} is een uitstekende keuze voor zowel beginnende als ervaren bordspelliefhebbers. De
                combinatie van toegankelijke regels en strategische diepte maakt het tot een spel dat je keer op keer
                wilt spelen. Ondanks enkele kleine nadelen is dit zeker een aanrader voor je spelcollectie.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Game Info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Spelinformatie</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ontwerper:</span>
                  <span className="font-medium">{gameDetails.designer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Uitgever:</span>
                  <span className="font-medium">{gameDetails.publisher}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Jaar:</span>
                  <span className="font-medium">{gameDetails.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taal:</span>
                  <span className="font-medium">{gameDetails.language}</span>
                </div>
              </div>
            </div>

            {/* Related Games */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Vergelijkbare Spellen</h3>
              <div className="space-y-3">
                {games
                  .filter((g) => g.id !== game.id && g.type === "bordspel")
                  .slice(0, 3)
                  .map((relatedGame) => (
                    <Link
                      key={relatedGame.id}
                      href={`/bordspellen/${relatedGame.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-gray-900">{relatedGame.name}</div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        {relatedGame.rating}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
