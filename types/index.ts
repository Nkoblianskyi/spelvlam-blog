export interface BlogPost {
  id: string
  title: string
  preview: string
  content: string[]
  image: string
  category: string
  date: string
  author: string
  slug: string
}

export interface Game {
  id: string
  name: string
  description: string
  image: string
  type: "bordspel" | "digitaal"
  rating: number
  players: string
  duration: string
}

export interface Fact {
  id: string
  title: string
  description: string
  icon: string
}
