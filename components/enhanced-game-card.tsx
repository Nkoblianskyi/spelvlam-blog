"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { Game } from "@/types"
import { Star, Clock, Users, Heart, Share2, TrendingUp } from "lucide-react"

interface EnhancedGameCardProps {
  game: Game
  index?: number
  monthlyPageUrl?: string
}

export default function EnhancedGameCard({ game, index = 0, monthlyPageUrl }: EnhancedGameCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className="group bg-white rounded-2xl shadow-md overflow-hidden card-enhanced hover-lift focus-ring animate-scale-in"
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        {!imageLoaded && <div className="absolute inset-0 skeleton"></div>}
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.name}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-110 brightness-110" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Rating badge with animation */}
        <div
          className={`absolute top-3 right-3 transform transition-all duration-300 ${
            isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
          }`}
        >
          <div className="bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow-lg backdrop-blur-sm">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{game.rating}</span>
          </div>
        </div>

        {/* Action buttons overlay */}
        <div
          className={`absolute top-3 left-3 flex gap-2 transform transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className={`p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-110 focus-ring ${
              isFavorited ? "bg-red-500 text-white" : "bg-white/90 text-gray-700 hover:bg-white"
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
          </button>
          <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white hover:scale-110 transition-all duration-200 focus-ring">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Game type indicator */}
        <div
          className={`absolute bottom-3 left-3 transform transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <span className="bg-accent-light text-accent-dark px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20">
            {game.type}
          </span>
        </div>
      </div>

      <div className="p-5 relative">
        <div className="flex items-start justify-between mb-2">
          <h3
            className={`text-xl font-serif font-semibold text-gray-900 transition-colors duration-200 ${
              isHovered ? "text-primary" : ""
            }`}
          >
            {game.name}
          </h3>
          {isHovered && <TrendingUp className="w-5 h-5 text-green-500 animate-bounce-subtle" />}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{game.description}</p>

        {/* Enhanced game stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div
            className={`flex items-center gap-1 transition-all duration-200 ${
              isHovered ? "text-primary transform scale-105" : ""
            }`}
          >
            <Users className="h-4 w-4" />
            <span>{game.players}</span>
          </div>
          <div
            className={`flex items-center gap-1 transition-all duration-200 ${
              isHovered ? "text-primary transform scale-105" : ""
            }`}
          >
            <Clock className="h-4 w-4" />
            <span>{game.duration}</span>
          </div>
        </div>

        {/* Enhanced CTA buttons */}
        {monthlyPageUrl ? (
          <div className="flex gap-2">
            <Link
              href={monthlyPageUrl}
              className="flex-1 btn-enhanced bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 text-center focus-ring group/btn"
            >
              <span className="flex items-center justify-center gap-2">
                Maandelijks Spel
                <div
                  className={`w-2 h-2 bg-white rounded-full transition-all duration-300 ${
                    isHovered ? "animate-pulse scale-125" : ""
                  }`}
                ></div>
              </span>
            </Link>
            <Link
              href={`/${game.type === "bordspel" ? "bordspellen" : "digitale-spellen"}/${game.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex-1 btn-enhanced bg-secondary hover:bg-secondary-dark text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 text-center focus-ring group/btn"
            >
              <span className="flex items-center justify-center gap-2">Bekijk Details</span>
            </Link>
          </div>
        ) : (
          <Link
            href={`/${game.type === "bordspel" ? "bordspellen" : "digitale-spellen"}/${game.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="block w-full btn-enhanced bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 text-center focus-ring group/btn"
          >
            <span className="flex items-center justify-center gap-2">
              Bekijk Details
              <div
                className={`w-2 h-2 bg-white rounded-full transition-all duration-300 ${
                  isHovered ? "animate-pulse scale-125" : ""
                }`}
              ></div>
            </span>
          </Link>
        )}

        {/* Hover glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transition-opacity duration-300 pointer-events-none ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  )
}
