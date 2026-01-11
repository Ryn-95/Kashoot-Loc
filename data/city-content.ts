
export type CityContent = {
  vibe: 'business' | 'creative' | 'residential' | 'student' | 'premium';
  deliveryTime: string;
  landmarks: string[];
  nearbyCities: string[]; // Slugs
};

// Logique de contenu par défaut si la ville n'est pas spécifiée
export const defaultCityContent: CityContent = {
  vibe: 'residential',
  deliveryTime: '2h',
  landmarks: ['Centre-ville', 'Zone d\'activités'],
  nearbyCities: ['paris', 'saint-denis']
};

export const citySpecifics: Record<string, CityContent> = {
  // --- 75 PARIS ---
  'paris': {
    vibe: 'premium',
    deliveryTime: '1h',
    landmarks: ['Tour Eiffel', 'Champs-Élysées', 'Le Marais', 'Bastille'],
    nearbyCities: ['boulogne-billancourt', 'saint-denis', 'neuilly-sur-seine', 'montreuil', 'levallois-perret']
  },

  // --- 93 SEINE-SAINT-DENIS ---
  'saint-denis': {
    vibe: 'creative',
    deliveryTime: '45min', // Proche entrepôt
    landmarks: ['Cité du Cinéma', 'Stade de France', 'Studios de Paris'],
    nearbyCities: ['aubervilliers', 'saint-ouen', 'epinay-sur-seine', 'paris']
  },
  'aubervilliers': {
    vibe: 'creative',
    deliveryTime: '45min',
    landmarks: ['Les Docks', 'Studios 93', 'Canal Saint-Denis'],
    nearbyCities: ['saint-denis', 'pantin', 'paris']
  },
  'montreuil': {
    vibe: 'creative',
    deliveryTime: '1h',
    landmarks: ['Studios Albatros', 'Mairie de Montreuil', 'Croix de Chavaux'],
    nearbyCities: ['bagnolet', 'vincennes', 'paris']
  },
  'aulnay-sous-bois': {
    vibe: 'residential',
    deliveryTime: '30min', // Base logistique fictive proche
    landmarks: ['O\'Parinor', 'Gare RER B', 'Zone Industrielle'],
    nearbyCities: ['le-blanc-mesnil', 'sevran', 'roissy-en-france']
  },
  'roissy-en-france': {
    vibe: 'business',
    deliveryTime: '30min',
    landmarks: ['Aéroport CDG', 'Zone Hôtelière', 'Parc des Expositions'],
    nearbyCities: ['goussainville', 'tremblay-en-france', 'aulnay-sous-bois']
  },
  'saint-ouen': {
    vibe: 'business',
    deliveryTime: '1h',
    landmarks: ['Puces de Saint-Ouen', 'Siège Région Île-de-France', 'Docks'],
    nearbyCities: ['saint-denis', 'clichy', 'paris']
  },

  // --- 92 HAUTS-DE-SEINE ---
  'boulogne-billancourt': {
    vibe: 'premium',
    deliveryTime: '1h30',
    landmarks: ['TF1', 'Canal+', 'La Seine Musicale'],
    nearbyCities: ['issy-les-moulineaux', 'saint-cloud', 'paris', 'neuilly-sur-seine']
  },
  'neuilly-sur-seine': {
    vibe: 'premium',
    deliveryTime: '1h15',
    landmarks: ['La Défense', 'Jardin d\'Acclimatation', 'Fondation Louis Vuitton'],
    nearbyCities: ['levallois-perret', 'courbevoie', 'paris']
  },
  'courbevoie': {
    vibe: 'business',
    deliveryTime: '1h15',
    landmarks: ['La Défense', 'Esplanade', 'Grande Arche'],
    nearbyCities: ['nanterre', 'neuilly-sur-seine', 'puteaux']
  },
  'issy-les-moulineaux': {
    vibe: 'business',
    deliveryTime: '1h30',
    landmarks: ['Sièges TV', 'Île Saint-Germain'],
    nearbyCities: ['boulogne-billancourt', 'vanves', 'paris']
  },

  // --- 94 VAL-DE-MARNE ---
  'creteil': {
    vibe: 'residential',
    deliveryTime: '1h30',
    landmarks: ['Lac de Créteil', 'Préfecture', 'Créteil Soleil'],
    nearbyCities: ['maisons-alfort', 'saint-maur-des-fosses', 'bonneuil']
  },
  'vincennes': {
    vibe: 'premium',
    deliveryTime: '1h15',
    landmarks: ['Château de Vincennes', 'Bois de Vincennes', 'Bérault'],
    nearbyCities: ['montreuil', 'fontenay-sous-bois', 'paris', 'saint-mande']
  },

  // --- 95 VAL D'OISE ---
  'cergy': {
    vibe: 'student',
    deliveryTime: '2h',
    landmarks: ['Port Cergy', 'ESSEC', '3 Fontaines'],
    nearbyCities: ['pontoise', 'neuville', 'conflans']
  },
  'argenteuil': {
    vibe: 'residential',
    deliveryTime: '1h15',
    landmarks: ['Gare Val d\'Argenteuil', 'Quais de Seine'],
    nearbyCities: ['sartrouville', 'colombes', 'bezons']
  }
};

export const getCityContent = (slug: string): CityContent => {
  return citySpecifics[slug] || defaultCityContent;
};

// Templates de textes basés sur le "Vibe"
export const contentTemplates = {
  business: {
    intro: "Pour vos productions corporate, interviews ou reportages institutionnels, la fiabilité est clé.",
    why: "Livraison express directement dans vos bureaux ou sur votre lieu de tournage. Facturation simplifiée pour les entreprises."
  },
  creative: {
    intro: "Clips, courts-métrages, documentaires : libérez votre créativité sans contrainte technique.",
    why: "Accès privilégié aux dernières optiques cinéma et caméras grand capteur. Tarifs adaptés aux jeunes créateurs."
  },
  premium: {
    intro: "L'excellence pour vos productions haut de gamme. Matériel cinéma dernière génération.",
    why: "Service conciergerie : livraison sur plateau, assistance technique et matériel de backup disponible."
  },
  student: {
    intro: "Projets de fin d'année, premiers courts-métrages ? Louez du matériel pro à prix accessible.",
    why: "Offres spéciales étudiants et packs démarrage pour vos premiers tournages."
  },
  residential: {
    intro: "Vidéaste freelance ou passionné ? Accédez au matériel des pros près de chez vous.",
    why: "Plus besoin d'aller dans Paris centre. Retrait facile ou livraison à domicile pour vos projets personnels."
  }
};
