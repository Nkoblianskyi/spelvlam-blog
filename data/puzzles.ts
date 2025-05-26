export interface Puzzle {
  id: string
  question: string
  answer: string
}

export const puzzles: Puzzle[] = [
  {
    id: "1",
    question: "Welke klassieke game bevat spoken en stippen?",
    answer: "Pac-Man",
  },
  {
    id: "2",
    question: "In welk bordspel probeer je als eerste alle stenen van je kleur in je thuisgebied te krijgen?",
    answer: "Backgammon",
  },
  {
    id: "3",
    question: "Welk spel wordt gespeeld op een bord van 8x8 vakjes met zwart-witte stenen?",
    answer: "Dammen (of Schaken)",
  },
  {
    id: "4",
    question: "In welk kaartspel is het doel om als eerste 'UNO' te roepen?",
    answer: "UNO",
  },
  {
    id: "5",
    question: "Welk bordspel heeft een gevangenis waar je drie beurten moet wachten?",
    answer: "Monopoly",
  },
  {
    id: "6",
    question: "In welk spel verzamel je treinstations en verbind je steden met gekleurde wagons?",
    answer: "Ticket to Ride",
  },
  {
    id: "7",
    question: "Welk digitaal spel begon als een mod voor Half-Life en werd later een eigen franchise?",
    answer: "Counter-Strike",
  },
  {
    id: "8",
    question: "In welk bordspel bouw je een beschaving en verzamel je grondstoffen zoals hout en steen?",
    answer: "Catan",
  },
  {
    id: "9",
    question: "Welk kaartspel heeft als doel om de koning van de tegenstander schaakmat te zetten?",
    answer: "Dit is een strikvraag - schaken wordt niet met kaarten gespeeld!",
  },
  {
    id: "10",
    question: "In welk coöperatief bordspel werk je samen om ziektes over de hele wereld uit te roeien?",
    answer: "Pandemic",
  },
]
