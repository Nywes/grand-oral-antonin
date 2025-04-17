export default function TransmissionPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-8">TRANSMISSION</h1>

      <div className="max-w-3xl mx-auto space-y-8">
        <section className="border border-teal-900 p-6">
          <h2 className="text-2xl font-bold mb-4">Protocole de Communication</h2>
          <div className="font-mono bg-black bg-opacity-50 p-4 border border-teal-700 text-teal-400">
            <p className="mb-2">FRÉQUENCE: 87.452 MHz</p>
            <p className="mb-2">HORAIRE: 02:30 / 14:30 / 22:30</p>
            <p>DURÉE: 240 secondes</p>
          </div>
          <p className="mt-4 text-sm">
            Utilisez une radio à ondes courtes modifiée pour capter ces fréquences. Les
            transmissions sont codées en trois couches de chiffrement.
          </p>
        </section>

        <section className="border border-teal-900 p-6">
          <h2 className="text-2xl font-bold mb-4">Codes d&apos;Identification</h2>
          <div className="font-mono bg-black bg-opacity-50 p-4 border border-teal-700 text-teal-400">
            <p className="mb-2">DÉBUT: &quot;L&apos;oiseau s&apos;envole à minuit&quot;</p>
            <p className="mb-2">
              RÉPONSE: &quot;Le ciel est couvert mais les étoiles brillent&quot;
            </p>
            <p>DANGER: &quot;Winston aime le chocolat&quot;</p>
          </div>
        </section>

        <section className="border border-teal-900 p-6">
          <h2 className="text-2xl font-bold mb-4">Points de Rencontre</h2>
          <p className="mb-4">
            Les coordonnées des points de rencontre sont transmises uniquement par les canaux
            vérifiés. Utilisez le système de décryptage fourni lors de l&apos;initiation.
          </p>
          <div className="font-mono bg-black bg-opacity-50 p-4 border border-teal-700 text-teal-400">
            <p>R29 = X7Y5 * (A3-B6) / Z12</p>
          </div>
        </section>
      </div>
    </div>
  );
}
