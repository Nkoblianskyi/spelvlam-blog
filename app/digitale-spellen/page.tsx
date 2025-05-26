import { games } from "@/data/games"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Star, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
    title: "Digitale Spellen - SpelVlam Blog",
    description: "Ontdek de beste digitale games, van indie parels tot AAA blockbusters.",
}

export default function DigitaleSpellenPage() {
    const digitalGames = games.filter((game) => game.type === "digitaal")

    return (
        <main className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Digitale Spellen</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Duik in de wereld van digitale gaming. Van indie parels tot AAA blockbusters, ontdek de games die je niet
                        mag missen en leer over de nieuwste trends in de gaming industrie.
                    </p>
                </div>

                {/* Featured Games */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Aanbevolen Digitale Games</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {digitalGames.map((game) => (
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
                                        href={`/digitale-spellen/${game.name.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="w-full bg-secondary hover:bg-secondary-dark text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center block"
                                    >
                                        Bekijk Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
