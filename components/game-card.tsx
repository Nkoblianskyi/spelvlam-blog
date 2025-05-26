import Image from "next/image"
import type { Game } from "@/types"
import { Star, Clock, Users } from "lucide-react"

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
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
        <p className="text-gray-600 text-sm mb-4">{game.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
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
      </div>
    </div>
  )
}
