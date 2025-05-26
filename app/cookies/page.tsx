import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Beleid - SpelVlam Blog",
  description: "Lees ons cookie beleid en leer hoe we cookies gebruiken op SpelVlam Blog.",
}

export default function CookiesPage() {
  return (
    <main className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Beleid</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Laatst bijgewerkt: 1 mei 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wat zijn cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt. Ze
              helpen ons de website te laten functioneren, de website veiliger te maken, een betere gebruikerservaring
              te bieden en te begrijpen hoe de website presteert.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welke cookies gebruiken wij?</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Noodzakelijke cookies</h3>
                <p className="text-gray-600">
                  Deze cookies zijn essentieel voor het functioneren van de website. Ze kunnen niet worden uitgeschakeld
                  in onze systemen. Ze worden meestal alleen ingesteld als reactie op acties die u onderneemt en die
                  neerkomen op een verzoek om diensten.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytische cookies</h3>
                <p className="text-gray-600">
                  Deze cookies stellen ons in staat bezoeken en verkeersbronnen te tellen, zodat we de prestaties van
                  onze site kunnen meten en verbeteren. Ze helpen ons te weten welke pagina's het meest en het minst
                  populair zijn.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Functionele cookies</h3>
                <p className="text-gray-600">
                  Deze cookies maken verbeterde functionaliteit en personalisatie mogelijk. Ze kunnen door ons of door
                  externe providers worden ingesteld wiens diensten we aan onze pagina's hebben toegevoegd.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uw keuzes</h2>
            <p className="text-gray-600 mb-4">
              U heeft het recht om te beslissen of u cookies accepteert of weigert. U kunt uw cookievoorkeuren instellen
              door op de juiste knoppen te klikken in de cookiebanner die verschijnt wanneer u onze website voor het
              eerst bezoekt.
            </p>
            <p className="text-gray-600">
              U kunt ook uw browserinstellingen wijzigen om cookies te weigeren. Houd er echter rekening mee dat als u
              dit doet, sommige delen van onze website mogelijk niet goed functioneren.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies van derden</h2>
            <p className="text-gray-600">
              Onze website kan ook cookies van derden bevatten, zoals Google Analytics, om ons te helpen de prestaties
              van onze website te analyseren. Deze cookies worden beheerd door de respectievelijke derde partijen en
              vallen onder hun privacybeleid.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600">
              Als u vragen heeft over ons cookiebeleid, kunt u contact met ons opnemen via:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Email: info@spelvlamblog.com</li>
              <li>Telefoon: +31 6 8285 4301</li>
              <li>Adres: Herengracht 420, 1017 BZ Amsterdam, Netherlands</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
