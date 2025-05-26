import Image from "next/image"
import Link from "next/link"
import { games } from "@/data/games"
import type { Metadata } from "next"
import { Star, Clock, Users, ArrowLeft, Trophy, Calendar, Award } from "lucide-react"

export const metadata: Metadata = {
    title: "Bordspel van de Maand - SpelVlam Blog",
    description: "Ontdek ons uitgekozen bordspel van de maand met uitgebreide review en speeltips.",
}

export default function BordspelVanDeMaandPage() {
    const featuredGame = games.find((g) => g.type === "bordspel" && g.name === "Wingspan")

    if (!featuredGame) {
        return <div>Spel niet gevonden</div>
    }

    const otherBoardGames = games.filter((g) => g.type === "bordspel" && g.id !== featuredGame.id).slice(0, 3)

    return (
        <main className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <Link href="/" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Terug naar home
                    </Link>
                </nav>

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Trophy className="w-10 h-10 text-primary" />
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Bordspel van de Maand</h1>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-600">Mei 2025</span>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Elke maand selecteren onze experts een uitstekend bordspel dat de aandacht verdient. Dit is onze keuze voor
                        deze maand!
                    </p>
                </div>

                {/* Featured Game */}
                <div className="bg-gradient-to-br from-primary-light via-white to-secondary-light rounded-2xl p-8 mb-16 shadow-lg">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Game Image */}
                        <div className="relative">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={featuredGame.image || "/placeholder.svg"}
                                    alt={featuredGame.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            {/* Award Badge */}
                            <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full shadow-lg">
                                <Award className="w-8 h-8" />
                            </div>
                        </div>

                        {/* Game Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                                    🏆 Winnaar Mei 2025
                                </span>
                            </div>

                            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">{featuredGame.name}</h2>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-1">
                                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                                    <span className="text-2xl font-bold">{featuredGame.rating}</span>
                                    <span className="text-gray-500">/5.0</span>
                                </div>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{featuredGame.description}</p>

                            {/* Game Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Users className="w-5 h-5 text-primary" />
                                        <span className="font-medium text-gray-900">Spelers</span>
                                    </div>
                                    <span className="text-gray-600">{featuredGame.players}</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Clock className="w-5 h-5 text-primary" />
                                        <span className="font-medium text-gray-900">Speeltijd</span>
                                    </div>
                                    <span className="text-gray-600">{featuredGame.duration}</span>
                                </div>
                            </div>

                            <Link
                                href={`/bordspellen/${featuredGame.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <span>Volledige Review Lezen</span>
                                <ArrowLeft className="w-4 h-4 rotate-180" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Why This Game */}
                <section className="mb-16">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
                        Waarom Wingspan Bordspel van de Maand is
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h4 className="font-serif font-semibold text-gray-900 mb-2">Prachtige Artwork</h4>
                            <p className="text-gray-600 text-sm">
                                Wingspan heeft een van de mooiste illustraties in de bordspelwereld, met realistische vogeltekeningen
                                die het spel tot leven brengen.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                            <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🧠</span>
                            </div>
                            <h4 className="font-serif font-semibold text-gray-900 mb-2">Strategische Diepte</h4>
                            <p className="text-gray-600 text-sm">
                                Het spel biedt genoeg strategische keuzes om ervaren spelers uit te dagen, terwijl het toegankelijk
                                blijft voor beginners.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                            <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌿</span>
                            </div>
                            <h4 className="font-serif font-semibold text-gray-900 mb-2">Educatieve Waarde</h4>
                            <p className="text-gray-600 text-sm">
                                Spelers leren over verschillende vogelsoorten en hun habitats, wat het spel zowel leuk als leerzaam
                                maakt.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Other Recommendations */}
                <section className="mb-16">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
                        Andere Aanbevolen Bordspellen
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {otherBoardGames.map((game) => (
                            <div key={game.id} className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
                                <div className="relative h-48">
                                    <Image
                                        src={game.image || "/placeholder.svg"}
                                        alt={game.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow-md">
                                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                        <span className="text-sm font-medium">{game.rating}</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">{game.name}</h4>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{game.description}</p>
                                    <Link
                                        href={`/bordspellen/${game.name.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-primary hover:text-primary-dark font-medium text-sm"
                                    >
                                        Bekijk Details →
                                    </Link>
                                </div>
                            </div>
                        ))} 
                    </div>
                </section>

                {/* Previous Winners */}
                <section className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Vorige Winnaars</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-2xl mb-2">🏆</div>
                            <div className="font-semibold text-gray-900">April 2025</div>
                            <div className="text-sm text-gray-600">Azul</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-2xl mb-2">🥈</div>
                            <div className="font-semibold text-gray-900">Maart 2025</div>
                            <div className="text-sm text-gray-600">Ticket to Ride</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-2xl mb-2">🥉</div>
                            <div className="font-semibold text-gray-900">Februari 2025</div>
                            <div className="text-sm text-gray-600">Splendor</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-2xl mb-2">🏅</div>
                            <div className="font-semibold text-gray-900">Januari 2025</div>
                            <div className="text-sm text-gray-600">Pandemic</div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
