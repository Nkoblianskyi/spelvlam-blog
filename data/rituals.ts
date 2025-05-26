export interface Ritual {
  id: string
  title: string
  description: string
  day: string
  game: string
  image: string
  date: string
  slug: string
  fullContent: string[]
  ingredients: string[]
  steps: string[]
  tips: string[]
  difficulty: "Makkelijk" | "Gemiddeld" | "Uitdagend"
  duration: string
  players: string
}

export const rituals: Ritual[] = [
  {
    id: "ritual-1",
    title: "Taco & Tactiek",
    day: "Vrijdagavond",
    game: "Codenames",
    description:
      "Vrijdagavond met vrienden, taco's en een spannend potje Codenames onder jazzmuziek. De perfecte combinatie van smaak en strategie voor een ontspannen avond vol gelach.",
    image: "/e01ee61c402b07902eb7b22cc2ccd629.jpg",
    date: "2025-05-20",
    slug: "taco-tactiek",
    difficulty: "Makkelijk",
    duration: "3-4 uur",
    players: "4-8 spelers",
    fullContent: [
      "Er is iets magisch aan de combinatie van goede vrienden, lekker eten en een uitdagend spel. Ons 'Taco & Tactiek' traditiel is ontstaan uit de behoefte om de werkweek af te sluiten met iets speciaals.",
      "Codenames is het perfecte spel voor dit traditiel omdat het communicatie en teamwork stimuleert, terwijl de taco's zorgen voor een ontspannen sfeer. De jazzmuziek op de achtergrond creëert de perfecte ambiance.",
      "Dit traditiel draait niet alleen om het winnen van het spel, maar om het creëren van herinneringen en het versterken van vriendschappen. De combinatie van mentale uitdaging en culinair genot maakt elke vrijdagavond bijzonder.",
      "Na maanden van dit traditiel hebben we gemerkt dat onze groep hechter is geworden en dat iedereen uitkijkt naar deze wekelijkse traditie. Het is meer dan een spelletjesavond - het is een moment van verbinding.",
    ],
    ingredients: [
      "Verse taco shells (hard en soft)",
      "Gekruid gehakt (rund of kip)",
      "Verse groenten (tomaat, sla, ui, paprika)",
      "Kaas (cheddar en mozzarella)",
      "Guacamole en salsa",
      "Zure room",
      "Mexicaanse kruiden",
      "Limoen",
      "Codenames spel",
      "Jazz playlist",
      "Dimbare verlichting",
    ],
    steps: [
      "Begin 2 uur voor aankomst gasten met voorbereidingen",
      "Bereid alle taco-ingrediënten voor en zet in aparte schaaltjes",
      "Zet de jazz playlist aan en dim het licht voor sfeer",
      "Leg Codenames klaar op de speeltafel",
      "Verwelkom gasten met een welkomstdrankje",
      "Laat iedereen eerst taco's maken en eten",
      "Start Codenames wanneer iedereen klaar is met eten",
      "Wissel teams na elke ronde voor variatie",
      "Houd snacks en drankjes binnen handbereik",
      "Eindig met een evaluatie van de avond",
    ],
    tips: [
      "Bereid taco-ingrediënten van tevoren voor om stress te vermijden",
      "Gebruik wegwerpborden om opruimen makkelijker te maken",
      "Zorg voor vegetarische opties voor alle gasten",
      "Houd handdoekjes binnen handbereik voor vette vingers",
      "Maak teams zo eerlijk mogelijk voor spannende potjes",
      "Varieer de jazz playlist om de sfeer fris te houden",
      "Zet telefoons op stil voor volledige focus",
      "Plan een backup spel voor als Codenames uitgespeeld raakt",
    ],
  },
  {
    id: "ritual-2",
    title: "Zondag Strategie & Stroopwafels",
    day: "Zondagmiddag",
    game: "Wingspan",
    description:
      "Een rustige zondagmiddag met verse stroopwafels, warme thee en het prachtige vogelspel Wingspan. Ideaal voor een ontspannen strategische sessie.",
    image: "/c9bd04f0b5f68d4c38ee0cdc835df161.jpg",
    date: "2025-05-13",
    slug: "zondag-strategie-stroopwafels",
    difficulty: "Gemiddeld",
    duration: "2-3 uur",
    players: "2-4 spelers",
    fullContent: [
      "Zondagmiddagen zijn gemaakt voor ontspanning en bezinning. Ons 'Zondag Strategie & Stroopwafels' traditiel combineert de rust van het weekend met de mentale stimulatie van een goed bordspel.",
      "Wingspan is de perfecte keuze voor dit traditiel vanwege zijn kalme, contemplatieve gameplay en prachtige artwork. Het spel past perfect bij de serene sfeer van een zondagmiddag.",
      "De verse stroopwafels en warme thee creëren een gezellige, huiselijke sfeer die uitnodigt tot langzaam spelen en genieten van elke zet. Het is een moment van mindfulness in een drukke wereld.",
      "Dit traditiel heeft ons geleerd dat gaming niet altijd competitief hoeft te zijn. Soms gaat het om het proces, de schoonheid van het spel en het delen van een rustig moment met dierbaren.",
    ],
    ingredients: [
      "Verse stroopwafels (bij voorkeur van de markt)",
      "Verschillende soorten thee (Earl Grey, kamille, groene thee)",
      "Honing en suiker",
      "Melk en citroen",
      "Wingspan bordspel",
      "Zachte achtergrondmuziek",
      "Comfortabele kussens",
      "Warme dekens",
      "Theepot en kopjes",
      "Kleine bordjes voor stroopwafels",
    ],
    steps: [
      "Zet de theepot klaar en verwarm water",
      "Leg Wingspan uit op een grote, comfortabele tafel",
      "Zet zachte instrumentale muziek aan",
      "Bereid een selectie van verschillende theesoorten",
      "Verwarm stroopwafels licht in de oven voor extra smaak",
      "Begin het spel rustig, zonder tijdsdruk",
      "Pauzeer regelmatig voor thee en stroopwafels",
      "Bespreek de vogels en hun eigenschappen tijdens het spel",
      "Maak foto's van mooie momenten",
      "Eindig met een wandeling in de natuur als het weer het toelaat",
    ],
    tips: [
      "Koop stroopwafels vers van de markt voor de beste smaak",
      "Varieer de theesoorten per seizoen",
      "Leg het spel van tevoren uit om de flow niet te onderbreken",
      "Gebruik een timer voor thee trekken",
      "Zorg voor goede verlichting om kaarten goed te kunnen lezen",
      "Houd een vogelgids bij de hand voor extra informatie",
      "Maak er een telefoonvrije zone van",
      "Plan voldoende tijd in - haast past niet bij dit traditiel",
    ],
  },
  {
    id: "ritual-3",
    title: "Woensdag Werkpauze",
    day: "Woensdagavond",
    game: "Azul",
    description:
      "Midden in de week even ontspannen met een snel potje Azul en verse koffie. Perfect om de werkstress weg te spelen.",
    image: "/9bb5a8289b5ba601421d8f8ba5fd9c6e.jpg",
    date: "2025-05-10",
    slug: "woensdag-werkpauze",
    difficulty: "Makkelijk",
    duration: "1-1.5 uur",
    players: "2-4 spelers",
    fullContent: [
      "Woensdag is vaak de zwaarste dag van de werkweek - je bent nog niet halverwege, maar het weekend voelt nog ver weg. Ons 'Woensdag Werkpauze' traditiel is ontworpen om deze mentale uitdaging aan te gaan.",
      "Azul is de perfecte keuze voor dit traditiel omdat het visueel rustgevend is, maar toch genoeg strategische diepte heeft om je gedachten af te leiden van werkstress. De prachtige tegels en eenvoudige regels maken het toegankelijk na een lange werkdag.",
      "De verse koffie geeft de nodige energie boost, terwijl het spel zorgt voor mentale ontspanning. Het is een perfecte balans tussen stimulatie en relaxatie.",
      "Dit traditiel heeft ons geholpen om de werkweek beter vol te houden en heeft onze productiviteit in de tweede helft van de week merkbaar verbeterd. Het is een investering in welzijn die zich direct terugbetaalt.",
    ],
    ingredients: [
      "Verse koffiebonen (medium roast)",
      "Koffiemachine of French press",
      "Melk en suiker naar smaak",
      "Kleine koekjes of chocolaatjes",
      "Azul bordspel",
      "Comfortabele stoelen",
      "Goede tafelverlichting",
      "Rustige achtergrondmuziek",
      "Notitieblok voor scores",
      "Timer voor koffie zetten",
    ],
    steps: [
      "Zet direct na het werk verse koffie",
      "Leg Azul klaar terwijl koffie trekt",
      "Zet rustige achtergrondmuziek aan",
      "Serveer koffie met kleine lekkernijen",
      "Begin met een snelle uitleg van de regels",
      "Speel 1-2 rondes afhankelijk van tijd",
      "Houd de sfeer licht en ontspannen",
      "Bespreek kort hoe de dag was",
      "Ruim samen op voor een frisse start",
      "Plan de volgende werkpauze in",
    ],
    tips: [
      "Houd het traditiel kort - maximaal 1.5 uur",
      "Bereid koffie van tevoren voor snellere start",
      "Kies voor decaf als je 's avonds slecht slaapt",
      "Zet telefoons op stil voor volledige ontspanning",
      "Varieer tussen verschillende koffiesoorten",
      "Houd het spel simpel - geen complexe strategieën",
      "Maak er een vaste afspraak van voor consistentie",
      "Eindig op tijd om nog tijd over te houden voor andere activiteiten",
    ],
  },
]
