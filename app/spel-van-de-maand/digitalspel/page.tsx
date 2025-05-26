import Image from "next/image"
import Link from "next/link"
import { games } from "@/data/games"
import type { Metadata } from "next"
import { Star, Clock, Users, ArrowLeft, Calendar, Award, Gamepad2 } from "lucide-react"

export const metadata: Metadata = {
    title: "Digitaal Spel van de Maand - SpelVlam Blog",
    description: "Ontdek ons uitgekozen digitale spel van de maand met uitgebreide review en speeltips.",
}

export default function DigitaalSpelVanDeMaandPage() {
    const featuredGame = games.find((g) => g.type === "digitaal" && g.name === "Hades")

    if (!featuredGame) {
        return <div>Spel niet gevonden</div>
    }

    const otherDigitalGames = games.filter((g) => g.type === "digitaal" && g.id !== featuredGame.id).slice(0, 3)

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
                        <Gamepad2 className="w-10 h-10 text-secondary" />
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Digitaal Spel van de Maand</h1>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-600">Mei 2025</span>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Onze gaming experts selecteren maandelijks een uitstekend digitaal spel dat je niet mag missen. Dit is onze
                        keuze voor deze maand!
                    </p>
                </div>

                {/* Featured Game */}
                <div className="bg-gradient-to-br from-secondary-light via-white to-accent-light rounded-2xl p-8 mb-16 shadow-lg">
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
                            <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-full shadow-lg">
                                <Award className="w-8 h-8" />
                            </div>
                        </div>

                        {/* Game Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                                    🎮 Winnaar Mei 2025
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
                                        <Users className="w-5 h-5 text-secondary" />
                                        <span className="font-medium text-gray-900">Spelers</span>
                                    </div>
                                    <span className="text-gray-600">{featuredGame.players}</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Clock className="w-5 h-5 text-secondary" />
                                        <span className="font-medium text-gray-900">Speeltijd</span>
                                    </div>
                                    <span className="text-gray-600">{featuredGame.duration}</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="btn-primary bg-secondary hover:bg-secondary-dark">Bekijk op Steam</button>
                                <button className="btn-secondary">Volledige Review</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why This Game */}
                <section className="mb-16">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
                        Waarom Hades Digitaal Spel van de Maand is
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                            <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚔️</span>
                            </div>
                            <h4 className="font-serif font-semibold text-gray-900 mb-2">Meeslepende Gameplay</h4>
                            <p className="text-gray-600 text-sm">
                                Hades combineert snelle actie met strategische diepte. Elke run voelt uniek en uitdagend aan.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                            <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📖</span>
                            </div>
                            <h4 className="font-serif font-semibold text-gray-900 mb-2">Verhaal & Karakters</h4>
                            <p className="text-gray-600 text-sm">
                                Een rijk verhaal gebaseerd op Griekse mythologie met memorabele karakters en uitstekende voice acting.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h4 className="font-serif font-semibold text-gray-900 mb-2">Visuele Pracht</h4>
                            <p className="text-gray-600 text-sm">
                                Supergiant Games heeft een visueel meesterwerk gecreëerd met prachtige hand-getekende art.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Gaming Tips */}
                <section className="mb-16 bg-gradient-to-br from-accent-light to-secondary-light rounded-2xl p-8">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Pro Gaming Tips voor Hades</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-3">🎯 Voor Beginners</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>• Focus eerst op het leren van de basis combat mechanics</li>
                                <li>• Experimenteer met verschillende wapens om je favoriet te vinden</li>
                                <li>• Praat met alle NPCs voor verhaal en tips</li>
                                <li>• Gebruik Darkness om permanente upgrades te kopen</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-3">⚡ Voor Gevorderden</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>• Leer de synergieën tussen verschillende Boons</li>
                                <li>• Master de dash-strike combo voor maximale damage</li>
                                <li>• Gebruik de Pact of Punishment voor extra uitdaging</li>
                                <li>• Probeer verschillende Heat levels voor betere rewards</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Previous Winners */}
                <section className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Vorige Digitale Winnaars</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-2xl mb-2">🏆</div>
                            <div className="font-semibold text-gray-900">April 2025</div>
                            <div className="text-sm text-gray-600">Baldur's Gate 3</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-2xl mb-2">🥈</div>
                            <div className="font-semibold text-gray-900">Maart 2025</div>
                            <div className="text-sm text-gray-600">Elden Ring</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-2xl mb-2">🥉</div>
                            <div className="font-semibold text-gray-900">Februari 2025</div>
                            <div className="text-sm text-gray-600">Hollow Knight</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-2xl mb-2">🏅</div>
                            <div className="font-semibold text-gray-900">Januari 2025</div>
                            <div className="text-sm text-gray-600">Celeste</div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
