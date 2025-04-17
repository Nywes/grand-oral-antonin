// Map the proof IDs to their corresponding PDF files
const proofMap: Record<string, string> = {
  '1': '/proofs/écris créatif sur la digitalisation de la société.pdf',
  '2': '/proofs/création agent IA en groupe.pdf',
  '3': "/proofs/Projet de mise en transparence d'algorithmes publics.pdf",
  '4': "/proofs/Projet de mise en transparence d'algorithmes publics.pdf",
  '5': "/proofs/Projet de mise en transparence d'algorithmes publics.pdf",
  '6': "/proofs/Projet de mise en transparence d'algorithmes publics.pdf",
};

// Actual proof data with metadata
export const proofs = [
  {
    id: 1,
    title: 'Preuve 1',
    date: '13.04.2084',
    documentUrl: '/proofs/écris créatif sur la digitalisation de la société.pdf',
  },
  {
    id: 2,
    title: 'Preuve 2',
    date: '14.04.2084',
    documentUrl: '/proofs/creation-agent-ia-en-groupe.pdf',
  },
  {
    id: 3,
    title: 'Preuve 3',
    date: '15.04.2084',
    documentUrl: "/proofs/Projet de mise en transparence d'algorithmes publics.pdf",
  },
  {
    id: 4,
    title: 'Preuve 4',
    date: '16.04.2084',
    documentUrl: "/proofs/Projet de mise en transparence d'algorithmes publics.pdf",
  },
  {
    id: 5,
    title: 'Preuve 5',
    date: '17.04.2084',
    documentUrl: "/proofs/Projet de mise en transparence d'algorithmes publics.pdf",
  },
  {
    id: 6,
    title: 'Preuve 6',
    date: '18.04.2084',
    documentUrl: "/proofs/Projet de mise en transparence d'algorithmes publics.pdf",
  },
];

export function getProofPath(id: string): string | null {
  return proofMap[id] || null;
}

export function isProofPDF(id: string): boolean {
  const path = getProofPath(id);
  return path !== null && path.endsWith('.pdf');
}

export function getProofById(id: number) {
  return proofs.find((proof) => proof.id === id) || null;
}
