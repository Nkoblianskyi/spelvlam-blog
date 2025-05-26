"use client"

import { useState } from "react"
import { games } from "@/data/games"

export default function GameDuel() {
  const [game1] = useState(games[0])
  const [game2] = useState(games[1])
  const [votes, setVotes] = useState({ game1: 0, game2: 0 })
  const [userVote, setUserVote] = useState<string | null>(null)

  const handleVote = (gameId: string) => {
    if (userVote) return // Already voted

    setUserVote(gameId)
    setVotes((prev) => ({
      ...prev,
      [gameId]: prev[gameId as keyof typeof prev] + 1,
    }))
  }

  const totalVotes = votes.game1 + votes.game2
  const game1Percentage = totalVotes > 0 ? (votes.game1 / totalVotes) * 100 : 50
  const game2Percentage = totalVotes > 0 ? (votes.game2 / totalVotes) * 100 : 50

  return null
}
