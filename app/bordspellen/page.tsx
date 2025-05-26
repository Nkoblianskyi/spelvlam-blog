import { games } from "@/data/games"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Star, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Bordspellen - SpelVlam Blog",
  description: "Ontdek de beste bordspellen, van strategische uitdagingen tot gezellige familiespellen.",
}

export default function BordspellenPage() {
  const boardGames = games.filter((game) => game.type === "bordspel")

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Bordspellen</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek de fascinerende wereld van bordspellen. Van strategische uitdagingen tot gezellige familiespellen,
            hier vind je de beste aanbevelingen, reviews en tips voor jouw perfecte spelavond.
          </p>
        </div>

        {/* Featured Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Waarom Bordspellen?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-orange-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sociale Interactie</h3>
              <p className="text-gray-600">
                Bordspellen brengen mensen samen en creëren betekenisvolle momenten zonder schermen. Ze stimuleren
                communicatie en versterken relaties tussen familie en vrienden.
              </p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mentale Stimulatie</h3>
              <p className="text-gray-600">
                Ontwikkel strategisch denken, probleemoplossing en concentratie door regelmatig te spelen. Bordspellen
                houden je geest scherp en uitgedaagd.
              </p>
            </div>
            <div className="text-center p-8 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Levensvaardigheden</h3>
              <p className="text-gray-600">
                Leer belangrijke vaardigheden zoals geduld, planning, omgaan met teleurstellingen en het vieren van
                successen in een veilige omgeving.
              </p>
            </div>
          </div>
        </section>

        {/* Game Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Categorieën</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategiespellen</h3>
              <p className="text-gray-600 text-sm mb-4">
                Diepgaande spellen die strategisch denken en langetermijnplanning vereisen.
              </p>
              <div className="text-orange-600 font-medium text-sm">15+ spellen</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Familiespellen</h3>
              <p className="text-gray-600 text-sm mb-4">
                Toegankelijke spellen die perfect zijn voor het hele gezin om samen te spelen.
              </p>
              <div className="text-orange-600 font-medium text-sm">20+ spellen</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Party Games</h3>
              <p className="text-gray-600 text-sm mb-4">
                Leuke en sociale spellen die perfect zijn voor grotere groepen en feestjes.
              </p>
              <div className="text-orange-600 font-medium text-sm">12+ spellen</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Coöperatieve Spellen</h3>
              <p className="text-gray-600 text-sm mb-4">
                Spellen waarbij alle spelers samenwerken tegen het spel zelf in plaats van tegen elkaar.
              </p>
              <div className="text-orange-600 font-medium text-sm">8+ spellen</div>
            </div>
          </div>
        </section>

        {/* Featured Games */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Aanbevolen Bordspellen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardGames.map((game) => (
              <div key={game.id} className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow-md">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{game.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{game.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{game.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{game.players}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{game.duration}</span>
                    </div>
                    <span className="bg-accent-light text-accent-dark px-2 py-1 rounded-full text-xs font-medium">
                      {game.type}
                    </span>
                  </div>
                  <Link
                    href={`/bordspellen/${game.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center block"
                  >
                    Bekijk Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buying Guide */}
        <section className="mb-16 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Koopgids: Het Juiste Spel Kiezen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Voor Beginners</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Start met eenvoudige regels (max 30 min uitleg)</li>
                <li>• Kies spellen met duidelijke winnaar</li>
                <li>• Vermijd te complexe strategieën</li>
                <li>• Zoek spellen met mooie componenten</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Voor Gevorderden</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Zoek naar diepere strategische lagen</li>
                <li>• Overweeg spellen met variabele setup</li>
                <li>• Probeer verschillende mechanica</li>
                <li>• Lees reviews van andere spelers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tips voor de Perfecte Spelavond</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Voorbereiding</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Lees de regels van tevoren</li>
                <li>• Zorg voor voldoende ruimte</li>
                <li>• Bereid snacks en drankjes voor</li>
                <li>• Kies spellen passend bij de groep</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tijdens het Spelen</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Leg regels geduldig uit</li>
                <li>• Moedig nieuwe spelers aan</li>
                <li>• Houd de sfeer luchtig</li>
                <li>• Maak foto's van leuke momenten</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Na het Spelen</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Bespreek wat leuk was</li>
                <li>• Plan de volgende spelavond</li>
                <li>• Berg spellen netjes op</li>
                <li>• Deel ervaringen online</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Where to Buy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Waar Bordspellen Kopen?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Online Winkels</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>Bol.com</strong> - Grootste selectie, snelle levering
                </li>
                <li>
                  <strong>Spellenrijk</strong> - Gespecialiseerde spelwinkel
                </li>
                <li>
                  <strong>De Spelletjes Vrienden</strong> - Goede prijzen en service
                </li>
                <li>
                  <strong>Amazon</strong> - Internationale titels
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fysieke Winkels</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>Lokale spelwinkels</strong> - Persoonlijk advies
                </li>
                <li>
                  <strong>Boekhandels</strong> - Populaire titels
                </li>
                <li>
                  <strong>Speelgoedwinkels</strong> - Familie spellen
                </li>
                <li>
                  <strong>Tweedehands</strong> - Marktplaats, Facebook
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Word Onderdeel van de Gemeenschap</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Sluit je aan bij duizenden bordspelliefhebbers in Nederland. Deel je ervaringen, ontdek nieuwe spellen en
            vind speelgroepen in jouw buurt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Lees Onze Reviews
            </a>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Stel een Vraag
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
