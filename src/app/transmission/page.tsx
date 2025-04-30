import Navigation from '@/components/Navigation';

export default function TransmissionPage() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 p-6 h-screen sticky top-0">
        <Navigation />
      </div>

      <div className="w-3/4 p-8">
        <div className="max-w-3xl space-y-8">
          <section className="border border-cyan-900 p-6">
            <h2 className="text-2xl font-bold mb-4">{'Protocole de Communication'}</h2>
            <div className="font-mono bg-black bg-opacity-50 p-4 border border-cyan-700 text-cyan-400">
              <p className="mb-2">{'FRÉQUENCE: 87.452 MHz'}</p>
              <p className="mb-2">{'HORAIRE: 02:30 / 14:30 / 22:30'}</p>
              <p>{'DURÉE: 240 secondes'}</p>
            </div>
            <p className="mt-4 text-sm">
              {
                'Utilisez une radio à ondes courtes modifiée pour capter ces fréquences. Les transmissions sont codées en trois couches de chiffrement.'
              }
            </p>
          </section>

          <section className="border border-cyan-900 p-6">
            <h2 className="text-2xl font-bold mb-4">{"Codes d'Identification"}</h2>
            <div className="font-mono bg-black bg-opacity-50 p-4 border border-cyan-700 text-cyan-400">
              <p className="mb-2">{'DÉBUT: "L\'oiseau s\'envole à minuit"'}</p>
              <p className="mb-2">{'RÉPONSE: "Le ciel est couvert mais les étoiles brillent"'}</p>
              <p>{'DANGER: "Winston aime le chocolat"'}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
