"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    router.push("/cookies")
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 animate-accordion-down">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">Deze website gebruikt cookies om jouw ervaring te verbeteren.</p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Akkoord
          </button>
          <button
            onClick={handleReject}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Weigeren
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Sluiten"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
