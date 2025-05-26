"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import SuccessPopup from "@/components/success-popup"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)

    // Show success popup instead of alert
    setShowSuccessPopup(true)

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Heb je vragen, suggesties of wil je samenwerken? We horen graag van je! Neem contact op via onderstaande
            gegevens of vul het contactformulier in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contactgegevens</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-orange-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@spelvlamblog.com</p>
                  <p className="text-gray-500 text-sm">We reageren binnen 24 uur</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-orange-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Telefoon</h3>
                  <p className="text-gray-600">+31 6 8285 4301</p>
                  <p className="text-gray-500 text-sm">Ma-Vr 9:00-17:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-orange-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Adres</h3>
                  <p className="text-gray-600">
                    Herengracht 420
                    <br />
                    1017 BZ Amsterdam
                    <br />
                    Netherlands
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Samenwerking</h3>
              <p className="text-gray-600 text-sm">
                Interesse in samenwerking? We werken graag samen met speluitgevers, influencers en andere gaming
                professionals. Neem contact op voor mogelijkheden.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stuur een Bericht</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Onderwerp *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Selecteer een onderwerp</option>
                  <option value="algemeen">Algemene vraag</option>
                  <option value="review">Review aanvraag</option>
                  <option value="samenwerking">Samenwerking</option>
                  <option value="technisch">Technische ondersteuning</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Vertel ons hoe we je kunnen helpen..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
              >
                Verstuur Bericht
              </button>
            </form>
          </div>
        </div>
      </div>
      <SuccessPopup isOpen={showSuccessPopup} onClose={() => setShowSuccessPopup(false)} />
    </main>
  )
}
