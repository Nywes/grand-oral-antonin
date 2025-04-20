// Map the proof IDs to their corresponding PDF files
const proofMap: Record<string, string> = {
  '1': '/proofs/Dissertation surveillance de masse.pdf',
  '2': '/proofs/Essai sur la modération des contenus en ligne.pdf',
  '3': '/proofs/Essai sur la vidéosurveillance algorithmique durant les Jeux Olympiques 2024.pdf',
  '4': "/proofs/Essai sur le concept de démocratie à l'ère du numérique.pdf",
  '5': "/proofs/Présentation du projet de directive européenne sur la responsabilité de l'IA.pptx",
  '6': "/proofs/Présentation orale sur la création d'un agent IA.pdf",
  '7': '/proofs/Présentation orale sur les enjeux éthiques posés par CRISPR-Cas9.pdf',
  '8': "/proofs/Projet de mise en transparence d'algorithmes publics copie.pdf",
  '9': '/proofs/Proposition de legaltech pour la notification immédiate des décisions de justice.pdf',
  '10': '/proofs/Récit semi-fictif sur la captation de données de santé dans les EHPADs.pdf',
};

// Actual proof data with metadata
export const proofs = [
  {
    id: 1,
    title: 'Dissertation surveillance de masse',
    date: '13.04.2084',
    documentUrl: '/proofs/Dissertation surveillance de masse.pdf',
  },
  {
    id: 2,
    title: 'Essai sur la modération des contenus en ligne',
    date: '14.04.2084',
    documentUrl: '/proofs/Essai sur la modération des contenus en ligne.pdf',
  },
  {
    id: 3,
    title: 'Essai sur la vidéosurveillance algorithmique durant les JO 2024',
    date: '15.04.2084',
    documentUrl:
      '/proofs/Essai sur la vidéosurveillance algorithmique durant les Jeux Olympiques 2024.pdf',
  },
  {
    id: 4,
    title: "Essai sur la démocratie à l'ère du numérique",
    date: '16.04.2084',
    documentUrl: "/proofs/Essai sur le concept de démocratie à l'ère du numérique.pdf",
  },
  {
    id: 5,
    title: "Directive européenne sur la responsabilité de l'IA",
    date: '17.04.2084',
    documentUrl:
      "/proofs/Présentation du projet de directive européenne sur la responsabilité de l'IA.pptx",
  },
  {
    id: 6,
    title: "Présentation sur la création d'un agent IA",
    date: '18.04.2084',
    documentUrl: "/proofs/Présentation orale sur la création d'un agent IA.pdf",
  },
  {
    id: 7,
    title: 'Présentation sur les enjeux éthiques de CRISPR-Cas9',
    date: '19.04.2084',
    documentUrl: '/proofs/Présentation orale sur les enjeux éthiques posés par CRISPR-Cas9.pdf',
  },
  {
    id: 8,
    title: "Transparence d'algorithmes publics",
    date: '20.04.2084',
    documentUrl: "/proofs/Projet de mise en transparence d'algorithmes publics copie.pdf",
  },
  {
    id: 9,
    title: 'Proposition de legaltech pour les décisions de justice',
    date: '21.04.2084',
    documentUrl:
      '/proofs/Proposition de legaltech pour la notification immédiate des décisions de justice.pdf',
  },
  {
    id: 10,
    title: 'Captation de données de santé dans les EHPADs',
    date: '22.04.2084',
    documentUrl:
      '/proofs/Récit semi-fictif sur la captation de données de santé dans les EHPADs.pdf',
  },
];

export function getProofPath(id: string): string | null {
  return proofMap[id] || null;
}

export function isProofPDF(id: string): boolean {
  const path = getProofPath(id);
  return path !== null && (path.endsWith('.pdf') || path.endsWith('.pptx'));
}

export function getProofById(id: number) {
  return proofs.find((proof) => proof.id === id) || null;
}
