import { assetUrl } from '../src/utils/assetUrl';

export interface Researcher {
  id: string;
  name: string;
  initials: string;
  role: string;
  group: 'PhD Scholars' | 'Project & Visiting Researchers';
  focus: string;
  summary: string;
  emailSubject?: string;
}

export interface Alumnus {
  name: string;
  institution: string;
  roleYear: string;
  project: string;
}

export interface InstitutionProfile {
  shortName: string;
  fullName: string;
  campus: string;
  address: string;
  email: string;
  phone?: string;
  website: string;
  mapsSearchUrl: string;
  mapsDirectionsUrl: string;
  roleSummary: string;
}

export const institutions: InstitutionProfile[] = [
  {
    shortName: 'PSG IAS',
    fullName: 'PSG Institute of Advanced Studies',
    campus: 'Peelamedu Campus · Nano Lab',
    address: 'Nano Lab, PSG Institute of Advanced Studies, Peelamedu, Coimbatore, Tamil Nadu 641004',
    email: 'seb@psgias.ac.in',
    phone: '0422 4344000 (ext 4327)',
    website: 'https://www.psgias.ac.in/',
    mapsSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=PSG+Institute+of+Advanced+Studies+Coimbatore',
    mapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=PSG+Institute+of+Advanced+Studies+Peelamedu+Coimbatore',
    roleSummary:
      'Experimental thin film synthesis, ultrasonic spray deposition, optoelectronic characterization, and D³Mat computational workshops.',
  },
  {
    shortName: 'PSG iTech',
    fullName: 'PSG Institute of Technology and Applied Research',
    campus: 'Neelambur Campus · Department of Physics',
    address: 'Department of Physics, PSG Institute of Technology and Applied Research, Avinashi Road, Neelambur, Coimbatore, Tamil Nadu 641062',
    email: 'sebin@psgitech.ac.in',
    website: 'https://www.psgitech.ac.in/',
    mapsSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=PSG+Institute+of+Technology+and+Applied+Research+Coimbatore',
    mapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=PSG+Institute+of+Technology+and+Applied+Research+Neelambur+Coimbatore',
    roleSummary:
      'Undergraduate and postgraduate physics teaching, computational materials modelling, student mentoring, and interdisciplinary engineering collaborations.',
  },
];

export const principalInvestigator = {
  name: 'Dr. Sebin Devasia',
  title: 'Assistant Professor of Physics & Principal Investigator',
  affiliations: [
    'PSG Institute of Advanced Studies, Coimbatore',
    'PSG Institute of Technology and Applied Research, Coimbatore',
  ],
  image: assetUrl('/images/pi.png'),
  primaryEmail: 'seb@psgias.ac.in',
  secondaryEmail: 'sebin@psgitech.ac.in',
  websiteUrl: 'https://spaceofsebin.vercel.app/',
  scholarUrl:
    'https://scholar.google.com/citations?hl=en&user=g2Z77WwAAAAJ&view_op=list_works&sortby=pubdate',
  irinsUrl: 'https://psgitech.irins.org/profile/651928',
  bio: 'Dr. Sebin Devasia leads the LASER Group across PSG Institute of Advanced Studies and PSG Institute of Technology and Applied Research. His work sits at the intersection of computational materials science, quantum materials, and thin film optoelectronics, focusing on lead free perovskite derivatives, chalcogenide absorbers, and catalytic surfaces. By combining plane wave density functional theory, machine learning interatomic potentials, and solution or vapour phase film growth, the group links atomic structure directly to practical energy and photodetector devices.',
  domains: [
    'Density functional theory',
    'Machine learning potentials',
    'Lead free halide perovskites',
    'Self powered photodetectors',
  ],
};

export const currentResearchers: Researcher[] = [
  {
    id: 'aswathy-ar',
    name: 'Ms. Aswathy A R',
    initials: 'AR',
    role: 'Doctoral Scholar (2nd Year PhD)',
    group: 'PhD Scholars',
    focus: 'DFT & Machine learning interatomic potentials',
    summary:
      'Developing density functional theory datasets and machine learning interatomic potentials (MLIPs) to resolve atomic disorder and phonon transport in chalcogenides for thermoelectric energy conversion.',
    emailSubject: 'Inquiry for Ms. Aswathy A R — LASER Group',
  },
  {
    id: 'aveena-varghese',
    name: 'Ms. Aveena Abee Varghese',
    initials: 'AV',
    role: 'Research Associate (PhD Graduate)',
    group: 'Project & Visiting Researchers',
    focus: 'Lead free halide thin films & photodetectors',
    summary:
      'Investigating thermally evaporated cesium bismuth iodide thin films, crystallization pathways, and broadband photodetection response.',
    emailSubject: 'Inquiry for Ms. Aveena Abee Varghese — LASER Group',
  },
];

export const alumniData: Alumnus[] = [
  {
    name: 'Ms. Dhanushmathi',
    institution: 'PSGR Krishnammal College for Women',
    roleYear: 'Masters Dissertation · 2026',
    project: 'Lead free bismuth iodide thin films for photodetection',
  },
  {
    name: 'Ms. Divya Dharshini',
    institution: 'PSGR Krishnammal College for Women',
    roleYear: 'Masters Dissertation · 2026',
    project: 'Lead free cesium bismuth iodide materials for photodetection',
  },
  {
    name: 'Ms. Thanushya',
    institution: 'PSG College of Arts & Science',
    roleYear: 'Masters Dissertation · 2025',
    project: 'Machine learning exploration of metal halide radiation detectors',
  },
  {
    name: 'Ms. Swetha',
    institution: 'PSGR Krishnammal College for Women',
    roleYear: 'Masters Dissertation · 2024',
    project: 'Computational analysis of CdS for catalysis using density functional theory',
  },
  {
    name: 'Ms. Kalaipriya',
    institution: 'PSGR Krishnammal College for Women',
    roleYear: 'Masters Dissertation · 2024',
    project: 'Bismuth sulfide thin films by ultrasonic spray deposition',
  },
  {
    name: 'Ms. Pavithra',
    institution: 'PSGR Krishnammal College for Women',
    roleYear: 'Masters Dissertation · 2024',
    project: 'Sprayed antimony sulfide thin films for solar absorbers',
  },
];
