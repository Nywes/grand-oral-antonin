export default function JournalPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-8">{"JOURNAL"}</h1>

      <div className="space-y-8">
        <article className="border border-teal-900 p-6">
          <h2 className="text-2xl font-bold mb-4">{"Entrée #42 - 15.07.2084"}</h2>
          <p className="mb-4">
            {
              "Les systèmes de surveillance sont de plus en plus sophistiqués. Aujourd'hui, j'ai réussi à contourner le nouveau pare-feu du secteur 7. Je dois partager ces informations avec le reste de la résistance."
            }
          </p>
          <div className="text-teal-300 text-sm">{"#résistance #infiltration #espoir"}</div>
        </article>

        <article className="border border-teal-900 p-6">
          <h2 className="text-2xl font-bold mb-4">{"Entrée #41 - 03.06.2084"}</h2>
          <p className="mb-4">
            {
              "La réunion d'hier a été interrompue. Trois des nôtres ont été capturés. Nous devons être plus prudents. Les codes d'accès ont été changés. Nouvelle fréquence établie."
            }
          </p>
          <div className="text-teal-300 text-sm">{"#danger #vigilance #nouveauxcodes"}</div>
        </article>
      </div>
    </div>
  );
}
