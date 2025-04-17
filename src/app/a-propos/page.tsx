export default function AProposPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-8">À PROPOS</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <p>
          En 2084, le monde tel que nous le connaissions n&apos;existe plus. Les algorithmes et
          l&apos;intelligence artificielle contrôlent désormais chaque aspect de nos vies, sous le
          contrôle d&apos;un régime totalitaire qui a effacé toute notion de vie privée et de
          liberté individuelle.
        </p>

        <p>
          Ce site est l&apos;ultime message de la résistance, un effort désespéré pour documenter
          les abus du système et rallier ceux qui osent encore penser par eux-mêmes.
        </p>

        <div className="border-l-4 border-red-600 pl-4 my-8">
          <p className="text-xl italic">
            &quot;La liberté, c&apos;est la liberté de dire que deux et deux font quatre. Lorsque
            cela est accordé, le reste suit.&quot;
          </p>
          <p className="text-teal-300 mt-2">— George Orwell</p>
        </div>

        <p>
          Si vous lisez ceci, vous faites désormais partie de notre réseau. Utilisez les codes et
          les protocoles décrits dans la section TRANSMISSION pour rejoindre nos efforts et échapper
          à la surveillance.
        </p>

        <p className="text-red-600 font-bold">
          Souvenez-vous : ils surveillent. Ils écoutent. Soyez prudents.
        </p>
      </div>
    </div>
  );
}
