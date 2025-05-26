import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Algemene Voorwaarden - SpelVlam Blog",
  description: "Lees onze algemene voorwaarden voor het gebruik van SpelVlam Blog.",
}

export default function VoorwaardenPage() {
  return (
    <main className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Algemene Voorwaarden</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Laatst bijgewerkt: 1 mei 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Toepasselijkheid</h2>
            <p className="text-gray-600">
              Deze algemene voorwaarden zijn van toepassing op het gebruik van de website SpelVlam Blog
              (spelvlamblog.com) en alle diensten die via deze website worden aangeboden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Gebruik van de website</h2>
            <p className="text-gray-600 mb-4">
              Door onze website te gebruiken, gaat u akkoord met deze voorwaarden. U mag onze website gebruiken voor:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Het lezen van artikelen en content</li>
              <li>Het delen van content via sociale media</li>
              <li>Het contact opnemen met ons team</li>
              <li>Het abonneren op onze nieuwsbrief</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Verboden gebruik</h2>
            <p className="text-gray-600 mb-4">Het is verboden om onze website te gebruiken voor:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Illegale activiteiten of doeleinden</li>
              <li>Het versturen van spam of ongewenste berichten</li>
              <li>Het uploaden van virussen of schadelijke code</li>
              <li>Het schenden van intellectuele eigendomsrechten</li>
              <li>Het verstoren van de werking van de website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectueel eigendom</h2>
            <p className="text-gray-600">
              Alle content op deze website, inclusief teksten, afbeeldingen, logo's en ontwerpen, is eigendom van
              SpelVlam Blog of wordt gebruikt met toestemming. Het is verboden om deze content te kopiëren, distribueren
              of commercieel te gebruiken zonder schriftelijke toestemming.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer</h2>
            <p className="text-gray-600">
              De informatie op deze website wordt aangeboden "zoals het is". We streven naar juistheid en actualiteit,
              maar kunnen geen garanties geven. We zijn niet aansprakelijk voor schade die voortvloeit uit het gebruik
              van onze website of de informatie daarop.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Links naar externe websites</h2>
            <p className="text-gray-600">
              Onze website kan links bevatten naar externe websites. We zijn niet verantwoordelijk voor de content of
              het privacybeleid van deze externe websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Wijzigingen</h2>
            <p className="text-gray-600">
              We behouden ons het recht voor om deze voorwaarden op elk moment te wijzigen. Wijzigingen worden
              gepubliceerd op deze pagina en treden onmiddellijk in werking.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Toepasselijk recht</h2>
            <p className="text-gray-600">
              Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde
              rechter in Amsterdam.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact</h2>
            <p className="text-gray-600 mb-4">
              Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen:
            </p>
            <ul className="list-disc list-inside text-gray-600">
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
