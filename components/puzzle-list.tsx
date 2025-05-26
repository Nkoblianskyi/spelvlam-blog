"use client"

import { useState } from "react"
import { Dice6, Trophy, Users, Clock, Star, ChevronRight } from "lucide-react"

const boardGameCategories = [
  {
    id: "strategy",
    name: "Strategiespellen",
    icon: "🧠",
    description: "Diepgaande spellen die strategisch denken vereisen",
    examples: ["Wingspan", "Azul", "Splendor"],
    difficulty: "Gemiddeld tot Hoog",
    players: "2-4 spelers",
    duration: "45-90 min",
  },
  {
    id: "family",
    name: "Familiespellen",
    icon: "👨‍👩‍👧‍👦",
    description: "Toegankelijke spellen voor het hele gezin",
    examples: ["Ticket to Ride", "King of Tokyo", "Codenames"],
    difficulty: "Laag tot Gemiddeld",
    players: "3-8 spelers",
    duration: "30-60 min",
  },
  {
    id: "cooperative",
    name: "Coöperatieve Spellen",
    icon: "🤝",
    description: "Werk samen tegen het spel in plaats van tegen elkaar",
    examples: ["Pandemic", "Forbidden Island", "Spirit Island"],
    difficulty: "Gemiddeld",
    players: "1-4 spelers",
    duration: "45-75 min",
  },
  {
    id: "party",
    name: "Party Games",
    icon: "🎉",
    description: "Leuke sociale spellen voor grotere groepen",
    examples: ["Wavelength", "Just One", "Telestrations"],
    difficulty: "Laag",
    players: "4-12 spelers",
    duration: "15-45 min",
  },
]

export default function BoardGameGuide() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Dice6 className="w-10 h-10 text-primary" />
            <h2 className="text-3xl font-serif font-bold text-gray-900">Bordspellen Gids</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ontdek de perfecte bordspellen voor elke gelegenheid. Van strategische uitdagingen tot gezellige
            familieavonden.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {boardGameCategories.map((category) => (
            <div
              key={category.id}
              className={`bg-white rounded-2xl p-6 shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                selectedCategory === category.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{category.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{category.players}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{category.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Star className="h-4 w-4 text-primary" />
                      <span>{category.difficulty}</span>
                    </div>
                  </div>

                  {selectedCategory === category.id && (
                    <div className="mt-4 p-4 bg-primary-light rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Populaire Voorbeelden:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((game, index) => (
                          <span
                            key={index}
                            className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {game}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    selectedCategory === category.id ? "rotate-90" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-br from-primary-light via-white to-secondary-light rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            Tips voor het Kiezen van het Juiste Bordspel
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <h4 className="font-serif font-semibold text-gray-900 mb-2">Ken je Groep</h4>
              <p className="text-gray-600 text-sm">
                Kies spellen die passen bij de ervaring en voorkeuren van je medespelers.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <h4 className="font-serif font-semibold text-gray-900 mb-2">Tijd & Ruimte</h4>
              <p className="text-gray-600 text-sm">
                Zorg dat je genoeg tijd en tafelruimte hebt voor het gekozen spel.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <h4 className="font-serif font-semibold text-gray-900 mb-2">Start Simpel</h4>
              <p className="text-gray-600 text-sm">
                Begin met eenvoudige spellen voordat je overgaat naar complexere strategieën.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
