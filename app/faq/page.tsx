"use client"

import { useState } from "react"
import { faqItems } from "@/data/faq"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle")

  const categories = ["Alle", ...Array.from(new Set(faqItems.map((item) => item.category)))]

  const filteredItems =
    selectedCategory === "Alle" ? faqItems : faqItems.filter((item) => item.category === selectedCategory)

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Veelgestelde Vragen</h1>
          <p className="text-xl text-gray-600">
            Vind antwoorden op de meest gestelde vragen over bordspellen, digitale games en onze blog.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                {openItems.includes(item.id) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Geen vragen gevonden in deze categorie.</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vraag niet beantwoord?</h2>
          <p className="text-gray-600 mb-6">
            Staat jouw vraag er niet bij? Neem gerust contact met ons op en we helpen je graag verder.
          </p>
          <a
            href="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            Neem Contact Op
          </a>
        </div>
      </div>
    </main>
  )
}
