import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacybeleid - SpelVlam Blog",
  description: "Lees ons privacybeleid en leer hoe we uw persoonlijke gegevens beschermen.",
}

export default function PrivacyPage() {
  return (
    <main className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacybeleid</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Laatst bijgewerkt: 1 mei 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Inleiding</h2>
            <p className="text-gray-600 mb-4">
              SpelVlam Blog ("wij", "ons", "onze") respecteert uw privacy en is toegewijd aan het beschermen van uw
              persoonlijke gegevens. Dit privacybeleid legt uit hoe we uw persoonlijke gegevens verzamelen, gebruiken en
              beschermen wanneer u onze website bezoekt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welke gegevens verzamelen wij?</h2>
            <p className="text-gray-600 mb-4">We kunnen de volgende soorten persoonlijke gegevens verzamelen:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Contactgegevens (naam, e-mailadres) wanneer u contact met ons opneemt</li>
              <li>Technische gegevens (IP-adres, browsertype, apparaatinformatie)</li>
              <li>Gebruiksgegevens (pagina's bezocht, tijd doorgebracht op de site)</li>
              <li>Communicatiegegevens (berichten die u ons stuurt)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hoe gebruiken wij uw gegevens?</h2>
            <p className="text-gray-600 mb-4">We gebruiken uw persoonlijke gegevens voor:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Het leveren van onze diensten en het beantwoorden van uw vragen</li>
              <li>Het verbeteren van onze website en gebruikerservaring</li>
              <li>Het versturen van nieuwsbrieven (alleen met uw toestemming)</li>
              <li>Het naleven van wettelijke verplichtingen</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rechtmatige basis voor verwerking</h2>
            <p className="text-gray-600 mb-4">We verwerken uw persoonlijke gegevens op basis van:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Uw toestemming (voor nieuwsbrieven en marketing)</li>
              <li>Contractuele noodzaak (voor het leveren van onze diensten)</li>
              <li>Gerechtvaardigd belang (voor websiteanalyse en verbetering)</li>
              <li>Wettelijke verplichting (voor compliance doeleinden)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delen van gegevens</h2>
            <p className="text-gray-600 mb-4">
              We verkopen, verhuren of delen uw persoonlijke gegevens niet met derden, behalve:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Met uw expliciete toestemming</li>
              <li>Voor het leveren van diensten (zoals hosting providers)</li>
              <li>Wanneer wettelijk vereist</li>
              <li>Voor het beschermen van onze rechten en veiligheid</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uw rechten</h2>
            <p className="text-gray-600 mb-4">Onder de AVG heeft u de volgende rechten:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Recht op toegang tot uw persoonlijke gegevens</li>
              <li>Recht op rectificatie van onjuiste gegevens</li>
              <li>Recht op verwijdering ("recht om vergeten te worden")</li>
              <li>Recht op beperking van verwerking</li>
              <li>Recht op gegevensoverdraagbaarheid</li>
              <li>Recht van bezwaar tegen verwerking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Beveiliging</h2>
            <p className="text-gray-600">
              We nemen passende technische en organisatorische maatregelen om uw persoonlijke gegevens te beschermen
              tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600 mb-4">
              Voor vragen over dit privacybeleid of om uw rechten uit te oefenen, kunt u contact met ons opnemen:
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
