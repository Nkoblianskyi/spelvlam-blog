import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { rituals } from "@/data/rituals"
import type { Metadata } from "next"
import { Clock, Users, Star, ArrowLeft, Calendar, Share2, Lightbulb } from "lucide-react"

interface RitualPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return rituals.map((ritual) => ({
    slug: ritual.slug,
  }))
}

export async function generateMetadata({ params }: RitualPageProps): Promise<Metadata> {
  const ritual = rituals.find((r) => r.slug === params.slug)

  if (!ritual) {
    return {
      title: "Traditie niet gevonden - SpelVlam Blog",
    }
  }

  return {
    title: `${ritual.title} - Spel traditie - SpelVlam Blog`,
    description: ritual.description,
    openGraph: {
      title: ritual.title,
      description: ritual.description,
      images: [ritual.image],
    },
  }
}

export default function RitualPage({ params }: RitualPageProps) {
  const ritual = rituals.find((r) => r.slug === params.slug)

  if (!ritual) {
    notFound()
  }

  return (
    <main className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/traditie"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar traditie
          </Link>
        </nav>

        <article>
          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-primary-light text-primary text-sm font-medium px-3 py-1 rounded-full">
                {ritual.day}
              </span>
              <span className="bg-accent-light text-accent-dark text-sm font-medium px-3 py-1 rounded-full">
                {ritual.game}
              </span>
              <span className="bg-secondary-light text-secondary-dark text-sm font-medium px-3 py-1 rounded-full">
                {ritual.difficulty}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">{ritual.title}</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{ritual.description}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 border-t border-b border-gray-200 py-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>{ritual.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                <span>{ritual.players}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-primary" />
                <span>{ritual.difficulty}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                <span>{new Date(ritual.date).toLocaleDateString("nl-NL")}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-lg">
            <Image src={ritual.image || "/placeholder.svg"} alt={ritual.title} fill className="object-cover" priority />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {ritual.fullContent.map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Ingredients */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              Wat heb je nodig?
            </h2>
            <div className="bg-primary-light rounded-2xl p-8 shadow-md">
              <ul className="grid md:grid-cols-2 gap-4">
                {ritual.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-secondary rounded-full"></div>
              Stap voor stap
            </h2>
            <div className="space-y-4">
              {ritual.steps.map((step, index) => (
                <div key={index} className="flex items-start bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-2">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-accent rounded-full"></div>
              Pro Tips
            </h2>
            <div className="bg-accent-light rounded-2xl p-8 shadow-md">
              <ul className="space-y-4">
                {ritual.tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Lightbulb className="text-accent mr-3 flex-shrink-0 h-5 w-5 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Share Section */}
          <section className="mb-12 bg-gradient-to-br from-primary-light via-white to-secondary-light rounded-2xl p-8 text-center shadow-md">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Probeer dit traditie!</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Heb je dit ritueel geprobeerd? We horen graag over jouw ervaring! Deel je foto's en verhalen met ons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                <button className="btn-primary flex items-center justify-center gap-2">
                  <Share2 className="h-4 w-4" />
                  <span>Deel je ervaring</span>
                </button>
              </Link>
              <Link href="/contact" className="btn-secondary">
                Stel een vraag
              </Link>
            </div>
          </section>
        </article>

        {/* Related Rituals */}
        <section className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Andere Traditie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rituals
              .filter((r) => r.id !== ritual.id)
              .slice(0, 2)
              .map((relatedRitual) => (
                <Link
                  key={relatedRitual.id}
                  href={`/rituelen/${relatedRitual.slug}`}
                  className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary-light text-primary text-xs font-medium px-2 py-1 rounded-full">
                      {relatedRitual.day}
                    </span>
                    <span className="bg-accent-light text-accent-dark text-xs font-medium px-2 py-1 rounded-full">
                      {relatedRitual.game}
                    </span>
                  </div>
                  <h3 className="font-serif font-semibold text-gray-900 mb-2">{relatedRitual.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{relatedRitual.description}</p>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  )
}
