import Image from "next/image"
import Link from "next/link"
import { rituals } from "@/data/rituals"
import type { Metadata } from "next"
import { Clock, Users, Calendar, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Spelrituelen Archief - SpelVlam Blog",
  description: "Ontdek al onze spelrituelen en laat je inspireren voor jouw perfecte game night.",
}

export default function RituelenPage() {
  const sortedRituals = rituals.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Spelrituelen Archief</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek al onze spelrituelen en laat je inspireren voor jouw perfecte game night. Van gezellige
            vrijdagavonden tot ontspannen zondagmiddagen.
          </p>
        </div>

        {/* Featured Tips */}
        <div className="mb-16 bg-gradient-to-br from-primary-light via-white to-secondary-light rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Tips voor het Perfecte Spelritueel
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Vaste Tijd</h3>
              <p className="text-gray-600 text-sm">Kies een vast moment in de week voor consistentie.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Vaste Groep</h3>
              <p className="text-gray-600 text-sm">Speel met dezelfde mensen voor betere chemie.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Thematische Snacks</h3>
              <p className="text-gray-600 text-sm">Kies eten dat past bij het spel of de sfeer.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Telefoons Weg</h3>
              <p className="text-gray-600 text-sm">Creëer een telefoonvrije zone voor focus.</p>
            </div>
          </div>
        </div>

        {/* Rituals Archive */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedRituals.map((ritual, index) => (
            <article
              key={ritual.id}
              className={`bg-white rounded-2xl shadow-md overflow-hidden card-hover ${
                index === 0 ? "ring-2 ring-primary" : ""
              }`}
            >
              {index === 0 && (
                <div className="bg-primary text-white text-center py-2 text-sm font-medium">Ritueel van deze Week</div>
              )}

              <div className="relative h-48 overflow-hidden">
                <Image
                  src={ritual.image || "/placeholder.svg"}
                  alt={ritual.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">{ritual.day}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-accent-light text-accent-dark text-xs font-medium px-2 py-1 rounded-full">
                    {ritual.game}
                  </span>
                  <span className="bg-secondary-light text-secondary-dark text-xs font-medium px-2 py-1 rounded-full">
                    {ritual.difficulty}
                  </span>
                </div>

                <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">{ritual.title}</h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{ritual.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{ritual.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{ritual.players}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{new Date(ritual.date).toLocaleDateString("nl-NL", { day: "numeric", month: "short" })}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/rituelen/${ritual.slug}`}
                    className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                  >
                    <span>Lees meer</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center p-8 bg-gradient-to-br from-primary-light via-white to-secondary-light rounded-2xl shadow-md">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Deel Jouw Spelritueel!</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Heb je een geweldig spelritueel dat je graag wilt delen? We horen graag van je! Stuur ons je favoriete
            combinatie van spel, eten en sfeer.
          </p>
          <Link href="/contact" className="btn-primary flex items-center justify-center gap-2 inline-flex">
            <Share2 className="h-4 w-4" />
            <span>Deel je Ritueel</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
