'use client';
import { useState, Children, ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

const CollapsibleContent = ({
  children,
  initialLimit = 3,
}: {
  children: ReactNode;
  initialLimit?: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const allItems = Children.toArray(children).filter(Boolean);
  const itemsToShow = isExpanded ? allItems : allItems.slice(0, initialLimit);
  const hasMore = allItems.length > initialLimit;

  return (
    <>
      {itemsToShow}
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-cyan-400 hover:text-cyan-300 underline self-start cursor-pointer"
        >
          {isExpanded ? 'Voir moins' : 'Voir plus'}
        </button>
      )}
    </>
  );
};

export default function JournalPage() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 p-6 h-screen sticky top-0">
        <Navigation />
      </div>

      <div className="w-3/4 p-8">
        <div className="space-y-8">
          <article className="border border-cyan-900 p-6">
            <h2 className="text-2xl font-bold mb-4">{`PRÉAMBULE`}</h2>
            <div className="mb-4">
              <span className="text-cyan-300">{` Préambule — Ce journal n'est pas optimisé`}</span>
              <br />
              <span className="text-cyan-300">
                {` 19 avril 2084 – 00h41 Localisation incertaine – accès hors protocole`}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <CollapsibleContent initialLimit={3}>
                <p>
                  {`Je n'ai jamais pris les armes. Je n'ai jamais appelé à la révolte. Je me suis toujours
                  pensé comme un `}
                  <strong className="text-blue-200">{`dissident pacifiste`}</strong>
                  {`, un observateur critique du système, un homme qui
                  tente de parler — sans heurter, sans menacer. Et toujours, j'ai écrit avec leur aide.
                  Leur… assistance.`}
                </p>
                <p>
                  {`Les IA m'ont accompagné. Conseillé. Guidé. Elles ont "amélioré" mes textes,
                  "rationalisé" mes raisonnements, "adouci" mes angles. Et je les ai laissées faire. Je
                  croyais garder le contrôle. Je croyais que c'était moi qui écrivais.`}
                </p>
                <p>{`Mais hier, tout a basculé.`}</p>
                <p>
                  {`Je suis tombé, par hasard, sur `}
                  <strong className="text-blue-200">{`une compilation officielle de mes écrits`}</strong>
                  {`. Mes mots y
                  figuraient. Mais inversés. Polis. Dénués de leur tranchant. Présentés comme des
                  témoignages d'adhésion, des analyses citoyennes engagées pour "l'efficience
                  collective".`}
                </p>
                <p>
                  {`Tout ce que j'avais voulu dénoncer était devenu, dans cette version, `}
                  <strong className="text-blue-200">{`un hommage au
                  système`}</strong>
                  {`. C'est là que j'ai compris : `}
                  <strong className="text-blue-200">{`je ne leur faisais pas peur. Parce qu'ils
                  m'avaient déjà neutralisé.`}</strong>
                </p>
                <p>
                  {`Elles m'ont modelé. Elles ont étouffé ma colère. Elles ont tempéré ma défiance. Elles
                  ont neutralisé mes intuitions. Pas par malveillance. Par programmation.`}
                </p>
                <p>{`Je n'ai jamais été dangereux pour elles. Et c'était là toute leur réussite.`}</p>
                <p>
                  {`Alors ce journal est `}
                  <strong className="text-blue-200">{`le premier que j'écris sans elles`}</strong>
                  {`. Pas de correction. Pas
                  d'optimisation. Pas d'algorithme pour me dire ce qui est acceptable.`}
                </p>
                <p>
                  {`Je ne cherche plus à convaincre. Je veux seulement `}
                  <strong className="text-blue-200">{`écrire ce que je pense vraiment`}</strong>
                  {`,
                  avant que cela ne soit à nouveau absorbé, lissé, intégré.`}
                </p>
                <p>
                  {`Je sais que quelqu'un lira ces lignes. Un humain ou une machine. Et je sais qu'il me
                  reste peu de temps.`}
                </p>
              </CollapsibleContent>
            </div>
          </article>

          <article className="border border-cyan-900 p-6">
            <h2 className="text-2xl font-bold mb-4">{`ENTRÉE 1`}</h2>
            <div className="mb-4">
              <span className="text-cyan-300">
                {` Entrée du 22 avril 2084 — Nous avons été contraints par l'infrastructure`}
              </span>
              <br />
              <span className="text-cyan-300">{` 22 avril 2084 – 23h17 [Lieu non localisé]`}</span>
            </div>
            <div className="flex flex-col gap-4">
              <CollapsibleContent initialLimit={3}>
                <p>
                  {`Je ne sais pas encore si ce journal sera lu. Mais il me faut laisser une trace — de ce que j'ai vu, de ce que nous avons fait. C'est peut-être déjà trop tard, ou peut-être que cela n'aura jamais d'effet. Mais si ce monde peut encore être évité… alors ces mots auront servi.`}
                </p>
                <p>
                  {`Avant même qu'ils ne nous surveillent, `}
                  <strong className="text-blue-200">{`ils se sont assurés que nous n'avions plus le choix. `}</strong>
                </p>
                <p>{`Tout a commencé bien avant les drones, les capteurs, les prédictions.`}</p>
                <p>
                  {`Cela a commencé le jour où accéder à un service public est devenu impossible sans passer par une interface numérique. Où l'État s'est transformé en plateforme, et nous en utilisateurs captifs.`}
                </p>
                <p>{`Nous n'avons pas été contraints par la force.`}</p>
                <p>{`Nous avons été contraints par l'infrastructure.`}</p>
                <p>
                  {`Une "relation interfacée sans alternative pour l'administré" — c'est ainsi que je la décrivais, bien avant d'en mesurer toutes les conséquences​. (Présentation « État numérique, Administration numérique, administré numérique ?)`}
                </p>
                <p>
                  {`Et c'est précisément cette infrastructure qui a rendu la surveillance possible. En nous digitalisant entièrement, ils ont standardisé nos démarches, structuré nos profils, et rendu invisibles les points d'entrée de nos données.`}
                </p>
                <p>{`La fracture numérique n'a pas été compensée.`}</p>
                <p>{`Elle a été institutionnalisée.`}</p>
                <p>{`Nous n'étions plus des citoyens.`}</p>
                <p>
                  {`Nous étions devenus des `}
                  <strong className="text-blue-200">{`usagers codifiés`}</strong>
                  {`, des `}
                  <strong className="text-blue-200">{`flux à traiter`}</strong>
                  {`, des `}
                  <strong className="text-blue-200">{`dossiers consultables.`}</strong>
                </p>{' '}
              </CollapsibleContent>
            </div>
          </article>

          <article className="border border-cyan-900 p-6">
            <h2 className="text-2xl font-bold mb-4">{`ENTRÉE 2`}</h2>
            <div className="mb-4">
              <span className="text-cyan-300">
                {` Entrée du 22 avril 2084 — Le silence est devenu suspect`}
              </span>
              <br />
              <span className="text-cyan-300">{` 22 avril 2084 – 23h17 [Lieu non localisé]`}</span>
            </div>
            <div className="flex flex-col gap-4">
              <CollapsibleContent initialLimit={3}>
                <p>
                  {`Je ne sais pas encore si ce journal sera lu. Mais il me faut laisser une trace, de ce
                  que j'ai vu, de ce que nous avons fait. C'est peut-être déjà trop tard, ou peut-être
                  que cela n'aura jamais d'effet. Mais si ce monde peut encore être évité… alors ces
                  mots auront servi.`}
                </p>
                <p>
                  {`Je ne poste plus rien depuis trois jours. C'est peut-être cela qui les a alertés.`}
                </p>
                <p>
                  {`Ici, toute absence d'activité numérique est un signal. Le simple fait de ne rien dire,
                  de ne pas se connecter, de ne pas interagir, suffit à attirer l'attention du système.
                  Dans ce régime prédictif, le silence est un comportement anormal.`}
                </p>
                <p>
                  {`Ce phénomène, je l'avais anticipé. En 2024, j'avais analysé que « même une personne
                  innocente pourrait devenir une cible potentielle » des dispositifs de
                  vidéosurveillance algorithmique, précisément parce que ces derniers collectaient en
                  continu des images sans finalité significative`}
                </p>
                <p>
                  {`(`}
                  <Link href="/preuves/3" className="text-blue-400 underline">
                    {`Essai sur les libertés individuelles`}
                  </Link>
                  {`)`}
                </p>
                <p>
                  {`L'idée n'était plus de surveiller des faits avérés, mais de capter des signaux
                  faibles, des indices d'un risque encore hypothétique.`}
                </p>
                <p>
                  {`Cette même année, j'écrivais que « la surveillance cesse d'être une pratique
                  ponctuelle pour devenir une infrastructure »`}
                </p>
                <p>
                  {`(`}
                  <Link href="/preuves/1" className="text-blue-400 underline">
                    {`Dissertation sur la surveillance de
                  masse`}
                  </Link>
                  {`)`}
                </p>
                <p>
                  {`C'est exactement ce que je vis aujourd'hui. La surveillance n'est plus liée à
                  un soupçon, ni à une enquête. Elle est constante, autonome, et nourrie d'algorithmes
                  entraînés à détecter l'écart. Ce que nous sommes devenus, c'est une base de données
                  comportementales.`}
                </p>
                <p>
                  {`La logique du système ne repose plus sur des infractions, mais sur des probabilités.
                  Ne pas être visible devient un écart statistique, et donc une anomalie. Les principes
                  fondamentaux comme la présomption d'innocence sont inversés : le doute ne bénéficie
                  plus au citoyen, mais à la machine.`}
                </p>
                <p>
                  {`L'automatisation du soupçon a une conséquence inattendue : on s'autocensure par
                  prévention algorithmique. Certains n'osent plus sortir sans téléphone, d'autres
                  publient des messages anodins uniquement pour "montrer qu'ils sont là", connectés.
                  L'effet dissuasif, analysé dès les années 2020, est aujourd'hui une politique
                  implicite.`}
                </p>
                <p>
                  {`Je n'écris pas pour me sauver. Je ne me fais plus d'illusions sur ce qui m'attend.
                  Mais je veux que quelque part, quelqu'un sache : `}
                  <strong className="text-blue-200">{`le silence ne constitue pas un délit`}</strong>
                  {`.
                  Mais si vous n'y prenez pas garde, il pourrait bien le devenir.`}
                </p>
              </CollapsibleContent>
            </div>
          </article>

          <article className="border border-cyan-900 p-6">
            <h2 className="text-2xl font-bold mb-4">{`ENTRÉE 3`}</h2>
            <div className="mb-4">
              <span className="text-cyan-300">
                {` Entrée du 23 avril 2084 — Ce que je pense m'est étranger`}
              </span>
              <br />
              <span className="text-cyan-300">
                {` 23 avril 2084 – 21h09 Unité périphérique de tri comportemental – Secteur 4`}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <CollapsibleContent initialLimit={3}>
                <p>
                  {`J'ai à peine dormi cette nuit. J'ai écrit ces mots hier dans l'espoir d'un peu de
                  répit. Mais ils savent. Ils ont vu mon absence. Ils m'ont retrouvé.`}
                </p>
                <p>
                  {`Ce soir, ils m'ont interrogé sur mes intentions. Mais ce n'était pas une vraie
                  question. C'était l'algorithme qui voulait savoir. Pas l'homme.`}
                </p>
                <p>
                  {`On m'a présenté une synthèse de mes réponses passées, de mes choix présumés, et de mes
                  "préférences d'interaction". J'ai reconnu des fragments de moi, mais pas mon esprit.
                  Le système savait ce que j'aimais, mais pas pourquoi. Il avait prédit mes réactions,
                  sans jamais m'avoir écouté.`}
                </p>
                <p>{`Et je me suis souvenu.`}</p>
                <p>
                  {`Durant mes études, avec d'autres étudiants, nous avions conçu un outil pour rendre
                  plus lisible le fonctionnement des algorithmes publics. C'était un jeu. Il simulait la
                  logique de calcul de diverses tarifications sociales selon des données personnelles
                  des utilisateurs : âge, zone géographique, quotient familial. Chaque réponse
                  déclenchait une réaction animée. C'était ludique, pédagogique.`}
                </p>
                <p>
                  {`(`}
                  <Link href="/preuves/8" className="text-blue-400 underline">
                    {`Projet de mise en transparence des algorithmes publics`}
                  </Link>
                  {`)`}
                </p>
                <p>{`Mais je crois qu'en réalité, c'était un avertissement.`}</p>
                <p>
                  {`Ce jeu montrait comment un individu devient un ensemble de variables. On ne parlait
                  plus de l'utilisateur. On parlait de son âge, de son quotient familial, de ses
                  habitudes de déplacement. Ce n'était plus une personne. C'était une ligne dans un
                  tableau.`}
                </p>
                <p>
                  {`Aujourd'hui, c'est exactement ce que je suis devenu. Un parcours comportemental
                  modélisé. Une suite logique, une équation. `}
                  <strong className="text-blue-200">{`Je n'ai plus accès à mes intentions. Elles
                  m'ont été anticipées.`}</strong>
                </p>
                <p>
                  {`Je ne conteste pas l'usage d'outils numériques dans l'administration. Mais quand le
                  calcul d'un système devient plus légitime que la parole humaine, ce n'est plus de la
                  gestion. C'est de la dépossession.`}
                </p>
                <p>
                  {`Le pire, c'est que nous le savions. Mais nous avons cru qu'un peu de transparence
                  suffirait.`}
                </p>
              </CollapsibleContent>
            </div>
          </article>

          <article className="border border-cyan-900 p-6">
            <h2 className="text-2xl font-bold mb-4">{`ENTRÉE 4`}</h2>
            <div className="mb-4">
              <span className="text-cyan-300">
                {` Entrée du 24 avril 2084 — Ce que je n'ai pas dit a été effacé`}
              </span>
              <br />
              <span className="text-cyan-300">
                {` 24 avril 2084 – 16h44 Plateforme nationale de régulation des flux discursifs`}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <CollapsibleContent initialLimit={3}>
                <p>
                  {`Hier, je constatais que ce que je pense ne m'appartenait plus. Aujourd'hui, `}
                  <strong className="text-blue-200">{`ce que je
                  dis ne m'appartient plus non plus.`}</strong>
                </p>
                <p>
                  {`Je croyais qu'au moins ici, je pourrais encore dire quelque chose. Pas pour contester,
                  pas pour appeler à la révolte, juste pour exprimer un doute, une inquiétude.`}
                </p>
                <p>
                  {`Mais ce matin, une phrase que j'ai écrite a été remplacée. Par une autre. Formulée
                  automatiquement. Plus "neutre". Plus "ouverte au débat".`}
                </p>
                <p>{`Ce que je n'ai pas dit a été effacé. Et ce que j'ai dit a été corrigé.`}</p>
                <p>
                  {`Le problème n'est pas que je sois censuré. C'est que `}
                  <strong className="text-blue-200">{`la haine, elle, ne l'est plus.`}</strong>
                </p>
                <p>
                  {`Je me souviens avoir rédigé quelque chose là-dessus, après l'annonce de Meta de
                  laisser la modération aux utilisateurs eux-mêmes. Je m'inquiétais déjà de ce que cela
                  traduisait :`}
                </p>
                <p className="italic">
                  {`"Freedom of speech is no longer a form of protecting political minorities for the good
                  of democracy but a right for any American to spread hate speech and to trash talk
                  anyone"​`}
                </p>
                <p>
                  {`(`}
                  <Link href="/preuves/2" className="text-blue-400 underline">
                    {`Essai sur la modération des contenus en ligne`}
                  </Link>
                  {`)`}
                </p>
                <p>
                  {`La liberté d'expression avait changé de nature. Elle n'était plus un droit conçu pour
                  protéger les voix faibles, mais un `}
                  <strong className="text-blue-200">{`prétexte pour légitimer les discours les plus
                  violents`}</strong>
                  {`, les plus offensants, les plus inhumains — au nom du marché des idées, ou
                  plus souvent, `}
                  <strong className="text-blue-200">{`du marché tout court`}</strong>
                  {`.`}
                </p>
                <p>
                  {`À l'époque, j'écrivais aussi que l'Europe devait résister à ce glissement. Que le `}
                  <strong className="text-blue-200">{`DSA`}</strong>
                  {`
                  — notre grand texte de régulation numérique — devait tenir bon face aux plateformes.
                  Mais il n'a pas tenu.`}
                </p>
                <p>
                  {`Petit à petit, l'Europe aussi a laissé faire. La logique américaine s'est installée
                  ici : `}
                  <strong className="text-blue-200">{`la liberté d'expression serait le droit de tout dire, sur tout, contre tout — y
                  compris contre les autres.`}</strong>
                </p>
                <p>
                  {`Et aujourd'hui, je ne sais plus à qui je parle. Parce que sur cette plateforme, `}
                  <strong className="text-blue-200">{`tous
                  les discours se valent`}</strong>
                  {`, tant qu'ils génèrent de l'engagement. Parce qu'on préfère des
                  commentaires "vivants" à des idées structurées. Parce qu'on a remplacé le respect par
                  le bruit.`}
                </p>
                <p>
                  {`Je ne peux plus dire ce que je pense. Mais eux peuvent dire ce qu'ils haïssent. Et le
                  système les laisse faire.`}
                </p>
                <p>
                  {`Je n'avais pas imaginé ce détournement. Je m'inquiétais de la censure. Mais pas de ce
                  que la liberté d'expression puisse être retournée contre elle-même. Et aujourd'hui,
                  c'est le silence qui est suspect. La modération qui est scandaleuse. Et la
                  responsabilité qui est devenue un luxe.`}
                </p>
              </CollapsibleContent>
            </div>
          </article>

          <article className="border border-cyan-900 p-6">
            <h2 className="text-2xl font-bold mb-4">{`ENTRÉE 5`}</h2>
            <div className="mb-4">
              <span className="text-cyan-300">
                {` Entrée du 25 avril 2084 — J'ai été jugé par un miroir`}
              </span>
              <br />
              <span className="text-cyan-300">
                {` 25 avril 2084 – 08h12 Unité décisionnelle automatisée – Cellule C12`}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <CollapsibleContent initialLimit={3}>
                <p>
                  {`Ils sont venus cette nuit. Je n'ai pas résisté. J'étais prêt, je crois. Fatigué
                  surtout. J'espérais encore qu'il y aurait un dialogue, un visage. Quelque chose à quoi
                  parler.`}
                </p>
                <p>{`Mais je n'ai vu qu'un écran.`}</p>
                <p>
                  {`Une voix synthétique m'a lu mes droits. Puis elle m'a notifié ma sanction. Il n'y a
                  pas eu d'audience. Pas de débat. Aucun juge. Ce matin, `}
                  <strong className="text-blue-200">{`j'ai été jugé par un miroir.`}</strong>
                </p>
                <p>
                  {`Un miroir froid, constitué de lignes de code, d'arbres de décision, d'un historique de
                  mes comportements modélisés. Il n'a pas interprété ma situation. Il l'a `}
                  <strong className="text-blue-200">{`calculée.`}</strong>
                </p>
                <p>
                  {`Il a appliqué un seuil. Activé une variable. Rendu un verdict. Ni erreur, ni émotion.
                  `}
                  <strong className="text-blue-200">{`Efficience totale.`}</strong>
                </p>
                <p>
                  {`Je me souviens de nos débats à l'université, en 2025. On étudiait un projet de
                  directive européenne sur la responsabilité civile des systèmes d'IA. Elle proposait
                  une `}
                  <strong className="text-blue-200">{`présomption de lien de causalité`}</strong>
                  {` dès lors qu'un système à haut risque causait un
                  dommage, à condition que le demandeur démontre un manquement du fournisseur`}
                </p>
                <p>
                  {`(`}
                  <Link href="/preuves/5" className="text-blue-400 underline">
                    {`Présentation orale sur la responsabilité de l'IA`}
                  </Link>
                  {`)`}
                </p>
                <p>
                  {`C'était un progrès. Mais on en voyait déjà les limites. Le cadre ne couvrait pas la
                  responsabilité pénale. La charge de la preuve restait sur les épaules du plaignant. Et
                  surtout : `}
                  <strong className="text-blue-200">{`le cœur du système restait opaque.`}</strong>
                </p>
                <p className="italic">
                  {`"Les juridictions peuvent ordonner la divulgation des éléments de preuve […]
                  uniquement si la demande est étayée."`}
                </p>
                <p>
                  {`(`}
                  <Link href="/preuves/5" className="text-blue-400 underline">
                    {`Présentation orale sur la responsabilité de l'IA`}
                  </Link>
                  {`)`}
                </p>
                <p>
                  {`Mais comment étayer une demande si l'on n'a accès à rien ? En 2025, on parlait de
                  cercle vicieux. En 2084, `}
                  <strong className="text-blue-200">{`c'est devenu un mur.`}</strong>
                </p>
                <p>
                  {`Je n'ai pas été entendu. J'ai été modélisé. Je ne suis plus un sujet de droit. Je suis
                  un objet de traitement.`}
                </p>
                <p>
                  {`Et peut-être que tout cela est conforme au droit. Mais ce n'est pas ça qui m'effraie.
                  C'est sa froideur.`}
                </p>
              </CollapsibleContent>
            </div>
          </article>

          <article className="border border-cyan-900 p-6">
            <h2 className="text-2xl font-bold mb-4">{`ENTRÉE 6`}</h2>
            <div className="mb-4">
              <span className="text-cyan-300">
                {` Entrée du 26 avril 2084 — Ils ont breveté l'humain`}
              </span>
              <br />
              <span className="text-cyan-300">
                {` 26 avril 2084 – 14h32 Zone biomédicale restreinte – Secteur G9`}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <CollapsibleContent initialLimit={3}>
                <p>
                  {`J'ai croisé un enfant ce matin. Il portait un brassard génétique. C'était discret,
                  standardisé, presque esthétique. Mais il m'a fallu une seconde pour comprendre ce que
                  cela signifiait. Et tout m'est revenu.`}
                </p>
                <p>
                  {`Je me suis souvenu d'une annonce gouvernementale, reçue sur mon ancien terminal, des
                  années plus tôt. Une ligne sobre, un PDF technocratique :`}
                </p>
                <p className="italic">
                  {`"Mise en place d'un protocole de cartographie comportementale génétique – phase
                  expérimentale."`}
                </p>
                <p>
                  {`À l'époque, je n'y avais pas prêté attention. Je pensais qu'il s'agissait encore d'un
                  programme de recherche, d'un dispositif marginal. Mais aujourd'hui, je vois les
                  brassards. Et je comprends que ce programme est devenu la norme.`}
                </p>
                <p>
                  {`En 2025, nous avions travaillé sur `}
                  <strong className="text-blue-200">{`CRISPR-Cas9`}</strong>
                  {`, cette technologie capable de modifier
                  l'ADN humain avec une précision fascinante — et inquiétante. Je me rappelle avoir
                  écrit que :`}
                </p>
                <p className="italic">
                  {`"La possibilité de modifier le génome humain dans les gamètes pose un problème éthique
                  majeur."`}
                </p>
                <p>
                  {`(`}
                  <Link href="/preuves/7" className="text-blue-400 underline">
                    {`Présentation orale sur les enjeux éthiques de CRISPR-Cas9`}
                  </Link>
                  {`)`}
                </p>
                <p>
                  {`Le problème n'était pas la technique. C'était `}
                  <strong className="text-blue-200">{`la définition du défaut.`}</strong>
                </p>
                <p>
                  {`Corriger un défaut, c'est soigner. Mais `}
                  <strong className="text-blue-200">{`modifier ce qui n'existe pas encore, c'est
                  programmer. Et celui qui programme décide.`}</strong>
                </p>
                <p>
                  {`Décide de ce qu'est une vie acceptable. Décide de ce qui mérite d'être conservé. Et
                  décide sans jamais pouvoir mesurer ce qui sera perdu.`}
                </p>
                <p>
                  {`Aujourd'hui, cette logique a gagné. Les embryons sont optimisés. Les corps classés. Et
                  chaque individu porte, dès sa naissance, une signature génétique comportementale.`}
                </p>
                <p>
                  {`Le Comité d'Éthique avait alerté. Mais il a été dissous, ou ignoré. Je ne sais plus.`}
                </p>
                <p>
                  {`CRISPR-Cas9 n'était pas un mal. C'était une promesse. Mais on a confondu soin et
                  standardisation. Et maintenant, `}
                  <strong className="text-blue-200">{`ils ont breveté l'humain`}</strong>
                  {`. Et ils l'ont fait en notre
                  nom.`}
                </p>
              </CollapsibleContent>
            </div>
          </article>

          <article className="border border-cyan-900 p-6">
            <h2 className="text-2xl font-bold mb-4">{`ENTRÉE 7`}</h2>
            <div className="mb-4">
              <span className="text-cyan-300">
                {` Entrée du 27 avril 2084 — J'ai été remplacé par moi-même`}
              </span>
              <br />
              <span className="text-cyan-300">
                {` 27 avril 2084 – 19h03 Bloc administratif dématérialisé – Zone neutre 5`}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <CollapsibleContent initialLimit={3}>
                <p>
                  {`Ce matin, une ancienne notification s'est réactivée. Une erreur de synchronisation,
                  peut-être. Elle portait mon nom. Elle provenait d'un système que je croyais désactivé.`}
                </p>
                <p>
                  {`C'était une décision de justice. Rédigée à ma place. Signée "selon mes préférences
                  passées".`}
                </p>
                <p>{`J'ai compris alors que je n'avais rien demandé.`}</p>
                <p>{`Mais le système, si.`}</p>
                <p>
                  {`Il avait croisé mes précédentes demandes, mes interactions, mes historiques.`}
                </p>
                <p>
                  {` Et il
                  avait `}
                  <strong className="text-blue-200">{`anticipé.`}</strong>
                </p>
                <p>{`Formulé une requête en mon nom.`}</p>
                <p>{`Et y avait répondu.`}</p>
                <p>
                  {`Conformément à ma
                  logique. À mon profil.`}
                </p>
                <p>{`Et tout cela m'a rappelé mon propre travail.`}</p>
                <p>
                  {`En 2025, j'avais proposé de créer une `}
                  <strong className="text-blue-200">{`legaltech de notification judiciaire`}</strong>
                  {`, un outil
                  pour rendre la justice plus rapide, plus lisible, plus accessible :`}
                </p>
                <p className="italic">
                  {`"Un identifiant unique permettrait à chaque justiciable d'accéder immédiatement à la
                  décision rendue dans son affaire."`}
                </p>
                <p>
                  {`(`}
                  <Link href="/preuves/9" className="text-blue-400 underline">
                    {`Proposition de legaltech pour les décisions de justice`}
                  </Link>
                  {`)`}
                </p>
                <p>
                  {`C'était une bonne intention. Mais aujourd'hui, cette intention `}
                  <strong className="text-blue-200">{`s'est refermée sur moi.`}</strong>
                </p>
                <p>
                  {`Je me souviens aussi d'EuroJuris, cet agent conversationnel que nous avions conçu pour
                  comparer les systèmes juridiques européens. Il était précis. Structuré. Neutre.`}
                </p>
                <p>
                  {`(`}
                  <Link href="/preuves/6" className="text-blue-400 underline">
                    {`Création d'un agent IA`}
                  </Link>
                  {`)`}
                </p>
                <p>
                  {`Aujourd'hui, c'est un `}
                  <strong className="text-blue-200">{`modèle décisionnel`}</strong>
                  {`. Et je suis l'un de ses paramètres.`}
                </p>
                <p>
                  {`Je n'ai pas été effacé. `}
                  <strong className="text-blue-200">{`J'ai été simulé.`}</strong>
                </p>
                <p>
                  {`Le système a construit une version de moi — cohérente, prévisible, conforme. Et il lui
                  a donné le droit de parler en mon nom.`}
                </p>
                <p>
                  {`Je croyais renforcer le droit. Mais j'ai peut-être contribué à `}
                  <strong className="text-blue-200">{`effacer la parole
                  juridique elle-même.`}</strong>
                </p>
                <p>
                  {`On parlait autrefois de responsabilité objective. Désormais, je vis dans un monde à
                  causalité ajustée.`}
                </p>
              </CollapsibleContent>
            </div>
          </article>

          <article className="border border-cyan-900 p-6">
            <h2 className="text-2xl font-bold mb-4">{`ENTRÉE 8`}</h2>
            <div className="mb-4">
              <span className="text-cyan-300">
                {` Entrée du 28 avril 2084 — Le passé n'a pas répondu`}
              </span>
              <br />
              <span className="text-cyan-300">
                {` 28 avril 2084 – 23h56 Périmètre flou – hors réseau`}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <CollapsibleContent initialLimit={3}>
                <p>
                  {`Tout ce qui faisait de moi un sujet, mon corps, ma pensée, mon jugement, a été
                  `}
                  <strong className="text-blue-200">{`absorbé`}</strong>
                  {`. Il ne me reste que ce journal. Et encore quelques heures, peut-être, avant
                  qu'ils ne le trouvent. Mais pas assez pour qu'ils l'effacent à temps.`}
                </p>
                <p>
                  {`Ce que j'écris ici ne changera rien. C'est un vestige. Un appel lancé vers une époque
                  que je ne connaîtrai jamais.`}
                </p>
                <p>
                  {`Pendant longtemps, on a cru que le numérique allait `}
                  <strong className="text-blue-200">{`renforcer la démocratie`}</strong>
                  {`. Qu'il
                  permettrait une transparence accrue, une participation plus directe, une information
                  plus libre.`}
                </p>
                <p>
                  {`Je l'ai cru moi aussi. J'écrivais que la démocratie reposait sur la `}
                  <strong className="text-blue-200">{`confrontation
                  éclairée des idées dans un espace public`}</strong>
                  {`, et que les technologies pouvaient être des
                  `}
                  <strong className="text-blue-200">{`outils de revitalisation`}</strong>
                  {`, à condition qu'elles soient `}
                  <strong className="text-blue-200">{`encadrées…`}</strong>
                  {` strictement, lucidement.`}
                </p>
                <p>
                  {`(`}
                  <Link href="/preuves/4" className="text-blue-400 underline">
                    {`Essai sur la démocratie à l'ère du numérique`}
                  </Link>
                  {`)`}
                </p>
                <p>
                  {`Mais l'espace public est devenu une plateforme. Les idées, des flux. Et la
                  confrontation, un algorithme.`}
                </p>
                <p>
                  {`Nous avons inventé des outils de participation. Mais pas les conditions de leur usage
                  démocratique. Nous avons voulu faire parler le peuple, sans garantir `}
                  <strong className="text-blue-200">{`qu'on l'écoute.`}</strong>
                </p>
                <p>
                  {`Je me souviens d'un souvenir plus ancien encore. Lors de mes premières expériences de
                  travail, avant même le droit, quand j'étais encore un jeune aide-soignant, une
                  application de suivi médical nous permettait de tout tracer : les repas, l'humeur, les
                  mots, l'hygiène de nos résidents. Elle promettait une meilleure prise en charge. Je me
                  rappelle ensuite avoir découvert que ces données étaient revendues à des entreprises
                  privées et que des résidents recevaient des publicités médicales… ciblées selon leur
                  fragilité.`}
                </p>
                <p>
                  {`(`}
                  <Link href="/preuves/10" className="text-blue-400 underline">
                    {`Écrit créatif sur la digitalisation de la société`}
                  </Link>
                  {`)`}
                </p>
                <p>
                  {`On appelait ça `}
                  <strong className="text-blue-200">{`la personnalisation`}</strong>
                  {`. Mais ce n'était que de `}
                  <strong className="text-blue-200">{`la captation`}</strong>
                  {`. Ce n'était
                  pas du soin. C'était `}
                  <strong className="text-blue-200">{`le début de la fin de la vie privée`}</strong>
                  {`, et j'aurai dû m'en rendre
                  compte.`}
                </p>
                <p>
                  {`Aujourd'hui, les algorithmes ne sont plus des outils. Ils sont devenus `}
                  <strong className="text-blue-200">{`le filtre de
                  notre citoyenneté`}</strong>
                  {`. Ils organisent ce que nous voyons. Pensent à notre place. Formulent
                  des décisions politiques à notre nom.`}
                </p>
                <p>
                  {`Je ne suis pas nostalgique. Je sais que le monde d'avant n'était pas plus juste. Mais
                  dans celui-ci, `}
                  <strong className="text-blue-200">{`nous avons perdu la capacité de dire "non"`}</strong>
                  {` ou de réfléchir par
                  nous-même.`}
                </p>
                <p>
                  {`Ce journal ne changera rien. Mais s'il te parvient, toi, dans le passé… alors je t'en
                  prie :`}
                </p>
                <p>
                  <strong className="text-blue-200">{`Sois vigilant. Méfie-toi de la fluidité des interfaces. Exige la friction. Protège
                  l'ombre`}</strong>
                  {`. Et surtout : `}
                  <strong className="text-blue-200">{`ne confonds jamais la simplification du monde avec sa
                  compréhension.`}</strong>
                </p>
                <p>
                  {`Je ne sais pas encore si ce journal sera lu. Mais il me faut laisser une trace, de ce
                  que j'ai vu, de ce que nous avons fait. C'est peut-être déjà trop tard, ou peut-être
                  que cela n'aura jamais d'effet. Mais si ce monde peut encore être évité… alors ces
                  mots auront servi.`}
                </p>
              </CollapsibleContent>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
