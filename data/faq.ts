export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Wat is het verschil tussen bordspellen en digitale spellen?",
    answer:
      "Bordspellen zijn fysieke spellen die je met anderen aan tafel speelt, terwijl digitale spellen op computers, consoles of mobiele apparaten gespeeld worden. Beide hebben unieke voordelen voor sociale interactie en vaardigheidsontwikkeling.",
    category: "Algemeen",
  },
  {
    id: "2",
    question: "Welke bordspellen zijn geschikt voor beginners?",
    answer:
      "Voor beginners raden we toegankelijke spellen aan zoals Ticket to Ride, Azul, Splendor, en King of Tokyo. Deze spellen hebben eenvoudige regels maar bieden genoeg strategische diepte.",
    category: "Bordspellen",
  },
  {
    id: "3",
    question: "Hoe kies ik het juiste spel voor mijn gezin?",
    answer:
      "Kijk naar de leeftijdsaanduiding, het aantal spelers, en de speelduur. Lees reviews en bekijk gameplay video's. Start met eenvoudige familiespellen voordat je overgaat naar complexere strategiespellen.",
    category: "Familiespellen",
  },
  {
    id: "4",
    question: "Zijn digitale spellen slecht voor kinderen?",
    answer:
      "Niet per se. Matige gaming kan cognitieve vaardigheden verbeteren en sociale connecties bevorderen. Het belangrijkste is een gezonde balans en leeftijdsgeschikte content.",
    category: "Digitale Spellen",
  },
  {
    id: "5",
    question: "Waar kan ik bordspellen kopen in Nederland?",
    answer:
      "Je kunt bordspellen kopen bij speelgoedwinkels, boekhandels, online retailers zoals bol.com, of gespecialiseerde spelwinkels. Veel steden hebben lokale spelwinkels met expert advies.",
    category: "Aankoop",
  },
  {
    id: "6",
    question: "Hoe leer ik nieuwe bordspellen?",
    answer:
      "Begin met het lezen van de spelregels, bekijk instructievideo's op YouTube, of vraag uitleg in een spelwinkel. Veel spellen hebben ook online tutorials beschikbaar.",
    category: "Leren",
  },
]
