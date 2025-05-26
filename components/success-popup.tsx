"use client"

import { useEffect } from "react"
import { CheckCircle, X } from "lucide-react"

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
}

export default function SuccessPopup({
  isOpen,
  onClose,
  title = "Bedankt!",
  message = "Bedankt voor je bericht, we nemen binnenkort contact met je op.",
}: SuccessPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => {
        clearTimeout(timer)
        document.body.style.overflow = "unset"
      }
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          aria-label="Sluiten"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Success icon */}
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce-subtle">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{title}</h3>

          {/* Message */}
          <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>

          {/* Action button */}
          <button onClick={onClose} className="btn-primary w-full">
            Begrepen
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse-soft"></div>
        <div
          className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  )
}
