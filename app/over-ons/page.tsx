import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Over Ons - SpelVlam Blog",
  description: "Leer meer over het SpelVlam Blog team en onze missie om de gaming gemeenschap te verbinden.",
}

export default function OverOnsPage() {
  const teamMembers = [
    {
      name: "Emma van der Berg",
      role: "Hoofdredacteur",
      bio: "Emma is een gepassioneerde bordspellenliefhebber met meer dan 10 jaar ervaring in de gaming industrie.",
      image: "/placeholder.svg?height=300&width=300&query=professional woman editor",
    },
    {
      name: "Pieter Janssen",
      role: "Gaming Specialist",
      bio: "Pieter combineert zijn liefde voor digitale games met uitgebreide kennis van de gaming cultuur.",
      image: "/placeholder.svg?height=300&width=300&query=professional man gaming specialist",
    },
    {
      name: "Dr. Sarah Vermeulen",
      role: "Onderzoeker",
      bio: "Sarah onderzoekt de psychologische aspecten van gaming en de impact op mentale gezondheid.",
      image: "/placeholder.svg?height=300&width=300&query=professional woman researcher",
    },
  ]

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Het Verhaal Achter <span className="text-primary">SpelVlam</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Wat begon als een passie voor bordspellen in een kleine Amsterdamse woonkamer, is uitgegroeid tot Nederlands
            meest vertrouwde bron voor gaming nieuws, reviews en community building. Ontdek hoe wij de Nederlandse
            gaming cultuur helpen vormgeven.
          </p>
        </div>

        {/* Our Story Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Ons Verhaal</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-light"></div>
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">De Vonk</h3>
                    <p className="text-gray-600">
                      Emma en Pieter ontmoeten elkaar in een bordspelcafé in Amsterdam. Hun gedeelde passie voor spellen
                      leidt tot eindeloze discussies over spelbalans, design en de Nederlandse gaming scene.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-secondary rounded-full border-4 border-white shadow-md z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Eerste Blog</h3>
                    <p className="text-gray-600">
                      Tijdens de lockdown starten we een kleine blog om onze spelervaring te delen. Tot onze verrassing
                      groeit de lezersschare snel naar duizenden Nederlandse gamers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Team Uitbreiding</h3>
                    <p className="text-gray-600">
                      Dr. Sarah Vermeulen sluit zich aan als onderzoeker. Haar expertise in gaming psychologie voegt
                      wetenschappelijke diepte toe aan onze content.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-accent rounded-full border-4 border-white shadow-md z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">SpelVlam Vandaag</h3>
                    <p className="text-gray-600">
                      Met meer dan 50.000 maandelijkse lezers zijn we uitgegroeid tot een platform dat de Nederlandse
                      gaming gemeenschap verbindt en inspireert.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-light to-white p-8 rounded-2xl shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Onze Missie</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Wij geloven dat spellen de kracht hebben om mensen te verbinden, vaardigheden te ontwikkelen en vreugde
                te brengen. Onze missie is om de Nederlandse gaming gemeenschap te informeren, inspireren en samen te
                brengen.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Toegankelijke reviews en gidsen voor alle niveaus
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Wetenschappelijk onderbouwde artikelen over gaming
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community building en lokale evenementen
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary-light to-white p-8 rounded-2xl shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Onze Visie</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We streven naar een Nederland waar gaming wordt erkend als waardevolle vorm van entertainment, educatie
                en sociale interactie. Een land waar elke leeftijdsgroep de voordelen van spellen kan ontdekken.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-secondary">2025</div>
                  <div className="text-sm text-gray-600">Doel jaar</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-secondary">1M+</div>
                  <div className="text-sm text-gray-600">Lezers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Enhanced */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Ons Expertteam</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">5+ jaar ervaring</span>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Impact */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Onze Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-primary-light rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Maandelijkse Lezers</div>
              <div className="text-sm text-gray-500 mt-2">Groeiend met 15% per maand</div>
            </div>
            <div className="text-center p-8 bg-secondary-light rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">200+</div>
              <div className="text-gray-600 font-medium">Spelreviews</div>
              <div className="text-sm text-gray-500 mt-2">Uitgebreide analyses</div>
            </div>
            <div className="text-center p-8 bg-accent-light rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-gray-600 font-medium">Evenementen</div>
              <div className="text-sm text-gray-500 mt-2">Community meetups</div>
            </div>
            <div className="text-center p-8 bg-gray-100 rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-gray-700 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Tevredenheid</div>
              <div className="text-sm text-gray-500 mt-2">Lezers feedback</div>
            </div>
          </div>
        </section>

        {/* Our Values - Enhanced */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Onze Kernwaarden</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center card-hover">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authenticiteit</h3>
              <p className="text-gray-600 leading-relaxed">
                Eerlijke reviews zonder commerciële beïnvloeding. Onze mening is gebaseerd op uitgebreide speelervaring
                en wetenschappelijk onderzoek.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center card-hover">
              <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusiviteit</h3>
              <p className="text-gray-600 leading-relaxed">
                Gaming is voor iedereen. We zorgen ervoor dat onze content toegankelijk is voor alle leeftijden,
                achtergronden en ervaringsniveaus.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center card-hover">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovatie</h3>
              <p className="text-gray-600 leading-relaxed">
                We blijven vooroplopen met nieuwe content formaten, interactieve features en community-driven
                initiatieven die de gaming ervaring verrijken.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center card-hover">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kwaliteit</h3>
              <p className="text-gray-600 leading-relaxed">
                Elke review, elk artikel en elke aanbeveling doorloopt ons strenge kwaliteitsproces. We publiceren
                alleen content waar we volledig achter staan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center card-hover">
              <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Onze lezers staan centraal. We luisteren naar feedback, organiseren evenementen en bouwen samen aan de
                Nederlandse gaming gemeenschap.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center card-hover">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Passie</h3>
              <p className="text-gray-600 leading-relaxed">
                Gaming is niet alleen ons werk, het is onze passie. Deze liefde voor spellen straalt door in alles wat
                we doen en schrijven.
              </p>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Erkenning & Awards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-md text-center">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-900 mb-2">Beste Gaming Blog 2025</h3>
              <p className="text-gray-600 text-sm">Nederlandse Gaming Awards</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-md text-center">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="font-bold text-gray-900 mb-2">Community Choice Award</h3>
              <p className="text-gray-600 text-sm">BoardGameGeek Nederland</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl shadow-md text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">Beste Educatieve Content</h3>
              <p className="text-gray-600 text-sm">Dutch Digital Media Awards</p>
            </div>
          </div>
        </section>

        {/* Contact CTA - Enhanced */}
        <section className="bg-gradient-to-br from-primary-light via-white to-secondary-light rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Laten we Samen Spelen!</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Heb je vragen, suggesties of wil je deel uitmaken van ons team? We zijn altijd op zoek naar gepassioneerde
            gamers die onze missie willen ondersteunen. Van gastschrijvers tot community moderators - er zijn vele
            manieren om bij te dragen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-medium transition-colors inline-block text-lg"
            >
              Neem Contact Op
            </a>
            <a
              href="/blog"
              className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-lg font-medium transition-colors inline-block text-lg"
            >
              Lees Onze Verhalen
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-sm text-gray-500">
            <span>📧 Reactietijd: &lt; 24 uur</span>
            <span>🎮 Actief sinds 2025</span>
            <span>🇳🇱 Gevestigd in Amsterdam</span>
          </div>
        </section>
      </div>
    </main>
  )
}
