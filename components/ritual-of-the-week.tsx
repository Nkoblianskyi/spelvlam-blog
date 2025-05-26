import Image from "next/image"
import Link from "next/link"
import { rituals } from "@/data/rituals"
import { Calendar, Clock, Users, ChevronRight } from "lucide-react"

export default function RitualOfTheWeek() {
  // Get the most recent ritual
  const latestRitual = rituals.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]

  if (!latestRitual) return null

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Spelritueel van de Week</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Laat je inspireren door onze wekelijkse spelrituelen. Ontdek hoe je jouw game night extra speciaal kunt maken!
        </p>

        <div className="bg-gradient-to-br from-primary-light via-white to-secondary-light rounded-2xl overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={latestRitual.image || "/placeholder.svg"}
                alt={latestRitual.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {latestRitual.day}
                </span>
                <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(latestRitual.date).toLocaleDateString("nl-NL")}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-accent-light text-accent-dark text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {latestRitual.game}
                </span>
              </div>

              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">{latestRitual.title}</h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">{latestRitual.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{latestRitual.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{latestRitual.players}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/rituelen/${latestRitual.slug}`}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <span>Lees volledig ritueel</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link href="/rituelen" className="btn-secondary flex items-center justify-center gap-2">
                  <span>Bekijk alle rituelen</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-primary-light rounded-2xl shadow-md">
            <h4 className="font-serif font-semibold text-gray-900 mb-2">Perfecte Snacks</h4>
            <p className="text-gray-600 text-sm">
              Kies hapjes die je met één hand kunt eten zonder het spel te verstoren.
            </p>
          </div>
          <div className="text-center p-6 bg-accent-light rounded-2xl shadow-md">
            <h4 className="font-serif font-semibold text-gray-900 mb-2">Sfeervolle Muziek</h4>
            <p className="text-gray-600 text-sm">Zachte achtergrondmuziek verhoogt de sfeer zonder af te leiden.</p>
          </div>
          <div className="text-center p-6 bg-secondary-light rounded-2xl shadow-md">
            <h4 className="font-serif font-semibold text-gray-900 mb-2">Goede Verlichting</h4>
            <p className="text-gray-600 text-sm">
              Zorg voor voldoende licht om kaarten en spelstukken goed te kunnen zien.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
